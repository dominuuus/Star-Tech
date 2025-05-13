import { GreenMissionCard } from "../../components/green-mission/GreenMissionCard/GreenMissionCard";
import { GreenMissionLevel } from "../../components/green-mission/GreenMissionLevel/GreenMissionLevel";
import {
    GoChallegeButton,
  GreenMissionBar,
  GreenMissionContainer,
  GreenMissionDetails,
  ListOfMissionsContainer,
  MissionDetailContainer,
} from "./GreenMission.styles";

export function GreenMission() {
  return (
    <GreenMissionContainer>
      <GreenMissionBar>
        <GreenMissionLevel />
      </GreenMissionBar>

      <GreenMissionDetails>
        <ListOfMissionsContainer>
          <GreenMissionCard />
        </ListOfMissionsContainer>

        <MissionDetailContainer>
          <h4>Faça um tour completo pela plataforma</h4>
          <hr />
          <p>
            Clique em tutoriais e conheça um pouco da plataforma do jogo. Ao
            concluir o tour, você estará apto para visitar.
          </p>
          <GoChallegeButton>
            <span>Ir para o desafio</span>
          </GoChallegeButton>
        </MissionDetailContainer>
      </GreenMissionDetails>
    </GreenMissionContainer>
  );
}
