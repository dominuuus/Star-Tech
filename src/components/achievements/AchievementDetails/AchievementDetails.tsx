import {AchievementDetailContainer, AchievementHeader, AchievementImage, AchievementContent, AchievementFooter, PlanetInfo, MascotesContainer, MascotesList, MascoteItem, MascoteImage, MascoteName, PlanetMapLayout} from "./AchievementDetails.style";

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
} & (
  | { Tipo: 'achievement'; Tarefas?: string; Qtd_moedas: number; Status: string }
  | { Tipo: 'planet'; Titulo: string; Qtd_missões?: number; Tema_Principal?: string; Gentilico: string }
  | { Tipo: 'mascot'; Titulo: string; Personalidade: string; Habilidade_Especial: string; Aparência: string }
);

type TabType = 'badges' | 'mapas' | 'mascotes';

export interface AchievementDetailProps {
  item: ContentType;
  type: TabType;
}

export function AchievementDetailComponent({ item, type }: AchievementDetailProps) {
  return (
    <AchievementDetailContainer>
      <AchievementHeader>
        <AchievementImage 
          src={item.Imagem} 
          alt={item.Nome}
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/default-image.png';
          }}
        />
        
        <AchievementContent>
          <h2>{item.Nome}</h2>
          
          {item.Tipo === 'achievement' && (
            <>
              {item.Descrição && <p className="description">{item.Descrição}</p>}
              <div className="stats">
                <p><strong>Moedas:</strong> {item.Qtd_moedas}</p>
                {item.Status && <p><strong>Status:</strong> {item.Status}</p>}
              </div>
            </>
          )}
          
          {item.Tipo === 'planet' && (
            <>
              {item.Descrição && <p className="description">{item.Descrição}</p>}
              {item.Tema_Principal && <p><strong>Tema:</strong> {item.Tema_Principal}</p>}
              {item.Gentilico && <p><strong>Gentílico:</strong> {item.Gentilico}</p>}
            </>
          )}
          
          {item.Tipo === 'mascot' && (
            <>
              {item.Descrição && <p className="description">{item.Descrição}</p>}
              {item.Habilidade_Especial && <p><strong>Habilidade:</strong> {item.Habilidade_Especial}</p>}
              {item.Aparência && <p><strong>Aparência:</strong> {item.Aparência}</p>}
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
                (e.target as HTMLImageElement).src = '/default-planet.png';
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
                  (e.target as HTMLImageElement).src = '/default-planet.png';
                }}
              />
            )}
            <div className="planet-text">
              <h3>Planeta Associado</h3>
              <span>{item.Planeta || 'Nenhum planeta associado'}</span>
            </div>
          </PlanetInfo>
        )}

        {item.Mascotes && item.Mascotes.length > 0 && (
          <MascotesContainer>
            <h4>Mascotes deste planeta:</h4>
            <MascotesList>
              {item.Mascotes.map((mascote, index) => (
                <MascoteItem key={index}>
                  <MascoteImage 
                    src={mascote.Imagem} 
                    alt={mascote.Nome}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/default-mascot.png';
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