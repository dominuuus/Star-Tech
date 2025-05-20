import {
  AchievementDetailContainer,
  AchievementHeader,
  AchievementImage,
  AchievementContent,
  AchievementFooter,
  PlanetInfo,
  MascotesContainer,
  MascotesList,
  MascoteItem,
  MascoteImage,
  MascoteName,
  PlanetMapLayout,
  ButtonClose,
  CoinDisplay,
  CoinIcon
} from "./AchievementDetails.style";
import images from "../../../assets/images"; 

import { X } from "phosphor-react";


type ContentType = {
  id: number;
  Nome: string;
  Imagem: string;
  Descrição?: string;
  Planeta?: string;
  Planeta_Imagem?: string;
  Mascotes?: {
    Nome: string;
    Imagem: string;
    Descrição?: string;
  }[];
  Mascote_nome?: string[];
  Mascote_imagem?: string[];
} & (
  | { Tipo: 'achievement'; Tarefas?: string; Qtd_moedas: number; Status: string; }
  | { Tipo: 'planet'; Titulo: string; Qtd_missões?: number; Tema_Principal?: string; Gentilico: string }
  | { Tipo: 'mascot'; Titulo: string; Personalidade: string; Habilidade_Especial: string; Aparência: string }
);

type TabType = 'badges' | 'mapas' | 'mascotes';

export interface AchievementDetailProps {
  item: ContentType;
  type: TabType;
  visible: boolean;
  setVisibility: (visibility: boolean) => void;
}

export function AchievementDetailComponent({ item, type, visible, setVisibility }: AchievementDetailProps) {
  
  const getMascotes = () => {
    if (item.Mascotes && item.Mascotes.length > 0) {
      return item.Mascotes;
    }
    
    if (item.Mascote_nome && item.Mascote_imagem) {
      return item.Mascote_nome.map((nome, index) => ({
        Nome: nome,
        Imagem: item.Mascote_imagem?.[index] || '',
        Descrição: ''
      }));
    }
    
    return [];
  };

  const mascotes = getMascotes();

  if (visible) {

  return (
    <AchievementDetailContainer>
      <ButtonClose onClick={() => setVisibility(false)}>
        <X weight="bold" size={25}/>
      </ButtonClose>
      <AchievementHeader>
        <AchievementImage 
          src={item.Imagem} 
          alt={item.Nome}
          onError={(e) => {
            (e.target as HTMLImageElement).src = '';
          }}
        />
        
        <AchievementContent>
          <h2>{item.Nome}</h2>
          
          {item.Tipo === 'achievement' && (
            <>
              {item.Descrição && <p className="description">{item.Descrição}</p>}
              {item.Tarefas && <p className="tarefas">{item.Tarefas}</p>}
              
              
              
        <CoinDisplay>
          <CoinIcon src={images.coin} alt="Moeda" />
            <span>{item.Qtd_moedas}</span>
        </CoinDisplay>



            </>
          )}
          
          {item.Tipo === 'planet' && (
            <>
              
              {item.Descrição && <p className="description">{item.Descrição}</p>}
              {item.Tema_Principal && <p><strong>Tema:</strong> {item.Tema_Principal}</p>}
              {item.Gentilico && <p><strong>Gentílico:</strong> {item.Gentilico}</p>}
              {item.Qtd_missões && <p><strong>Missões:</strong> {item.Qtd_missões}</p>}
            
            </>
          )}
          
          {item.Tipo === 'mascot' && (
            <>
              {item.Descrição && <p className="description">{item.Descrição}</p>}
              {item.Habilidade_Especial && <p><strong>Habilidade:</strong> {item.Habilidade_Especial}</p>}
              {item.Aparência && <p><strong>Aparência:</strong> {item.Aparência}</p>}
              {item.Titulo && <p><strong>Título:</strong> {item.Titulo}</p>}
            </>
          )}
        </AchievementContent>
      </AchievementHeader>

      <AchievementFooter>
        {type === 'mapas' ? (
          <PlanetMapLayout>
            <img 
              src={item.Planeta_Imagem} 
              alt={item.Planeta}
              className="planet-image"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '';
              }}
            />
            {item.Planeta && <h3 className="planet-name">{item.Planeta}</h3>}
          </PlanetMapLayout>
        ) : (
          <PlanetInfo $hasPlanet={!!item.Planeta_Imagem}>
            {item.Planeta_Imagem && (
              <img 
                src={item.Planeta_Imagem} 
                alt={item.Planeta}
                className="planet-image"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '';
                }}
              />
            )}
            <div className="planet-text">
              <h3>Planeta Associado</h3>
              <span>{item.Planeta || 'Nenhum planeta associado'}</span>
            </div>
          </PlanetInfo>
        )}

        
        {mascotes.length > 0 && (
          <MascotesContainer>
            <h4>Mascotes deste planeta:</h4>
            <MascotesList>
              {mascotes.map((mascote, index) => (
                <MascoteItem key={index}>
                  <MascoteImage 
                    src={mascote.Imagem} 
                    alt={mascote.Nome}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '';
                    }}
                  />
                  <MascoteName>{mascote.Nome}</MascoteName>
                </MascoteItem>
              ))}
            </MascotesList>
          </MascotesContainer>
        )}
      </AchievementFooter>
    </AchievementDetailContainer>
  );
  }
}