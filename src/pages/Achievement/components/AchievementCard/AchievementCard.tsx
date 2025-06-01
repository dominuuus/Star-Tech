import { useEffect, useState } from "react";
import { BadgeWrapper, AchievementList, AchievementItem, Badge, BadgeImg} from "./AchievementCard.style";
import { fetchAchievement } from "../../../../services/achievementService";
import { fetchPlanet } from "../../../../services/planetService";
import { fetchMascot } from "../../../../services/mascotService";
import { AchievementDetailComponent } from "../AchievementDetails/AchievementDetails";
import { AchievementTabs } from "../AchievementTabs/AchievementTabs";
import { LockSimple } from "phosphor-react";


type ContentType = {
  id: number;
  Nome: string;
  Imagem: string;  
  Descrição?: string;
  Planeta?: string;
  Planeta_Imagem?: string;
} & (
  | { Tipo: 'achievement'; Tarefas?: string; Qtd_moedas: number; Status: string }
  | { Tipo: 'planet'; Titulo: string; Qtd_missões?: number; Tema_Principal?: string; Gentilico: string }
  | { Tipo: 'mascot'; Titulo: string; Personalidade: string; Habilidade_Especial: string; Aparência: string }
);

type TabType = 'badges' | 'mapas' | 'mascotes';

export function AchievementCard() {
  const [activeTab, setActiveTab] = useState<TabType>('badges');
  const [content, setContent] = useState<ContentType[]>([]);
  const [selectedItem, setSelectedItem] = useState<ContentType | null>(null);
  const [achievementDetailVisibility, setAchievementDetailVisibility] = useState<boolean>();
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (activeTab === 'badges') {
          const achievements = await fetchAchievement();
          setContent(achievements.map(a => ({
            ...a,
            Tipo: 'achievement' as const,
            Imagem: a.Imagem 
          })));
        } else if (activeTab === 'mapas') {
          const planets = await fetchPlanet();
          setContent(planets.map(p => ({
            ...p,
            Tipo: 'planet' as const,
            Imagem: p.Imagem || '' 
          })));
        } else {
          const mascots = await fetchMascot();
          setContent(mascots.map(m => ({
            ...m,
            Tipo: 'mascot' as const,
            Imagem: m.Imagem 
          })));
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setContent([]);
      }
    };

    fetchData();
  }, [activeTab]);

  const getImageUrl = (path: string) => {
    try {
      return new URL(path, import.meta.url).href;
    } catch {
      return path;
    }
  };

  const isLocked = (status?: string) => {
    const lockedStatuses = ['bloqueado', 'secreto', 'não explorado'];
    return status ? lockedStatuses.includes(status.toLowerCase()) : false;
  };

  const renderItemList = () => {
    return content.map((item) => {
      const imageUrl = getImageUrl(item.Imagem);
      const planetUrl = item.Planeta_Imagem ? getImageUrl(item.Planeta_Imagem) : undefined;

      const locked = 'Status' in item ? isLocked(item.Status) : false;

      return (
        <AchievementItem key={`${item.Tipo}-${item.id}`}>
          <Badge
            onClick={() => {
              if (!locked) {
                setSelectedItem({
                  ...item,
                  Imagem: imageUrl,
                  ...(planetUrl && { Planeta_Imagem: planetUrl }),
                });
                setAchievementDetailVisibility(true)
              }
            }}
            style={{ cursor: locked ? 'not-allowed' : 'pointer' }}
          >
          <div>
            <BadgeImg
              src={imageUrl}
              alt={item.Nome}
              style={{ filter: locked ? 'blur(1px) grayscale(100%)' : 'none', opacity: locked ? 0.5 : 1 }}
              onError={(e) => {
                (e.target as HTMLImageElement).src = '';
          
              }}
              
            />
            {locked && <LockSimple style={{ position: "absolute", right: 5, top: 5 }} />}
          </div>
          </Badge>
        </AchievementItem>
      );
    });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', maxWidth: '80vw' }}>
      <AchievementTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <BadgeWrapper>
        <AchievementList>
          {renderItemList()}
        </AchievementList>

        {selectedItem && achievementDetailVisibility ? (
          <AchievementDetailComponent item={selectedItem} type={activeTab} visible={achievementDetailVisibility} setVisibility={setAchievementDetailVisibility} />
        ) : (
          <div style={{ 
            width: '100%', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            color: '#666' 
          }}>
            Selecione um item para ver os detalhes
          </div>
        )}
      </BadgeWrapper>
    </div>
  );
}