import { Link } from "react-router-dom";
import {
  ButtonContainer,
  GoToMissionButton,
  MissionCardModalContainer,
  MissionCardModalContent,
  MissionCardModalDescription,
  MissionCardModalTitle,
} from "./MissionCardModal.styles";

interface MissionCardModalProps {
  missionName: string;
  onClose: () => void;
}

export function MissionCardModal({
  missionName,
  onClose,
}: MissionCardModalProps) {
  return (
    <MissionCardModalContainer
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <MissionCardModalContent>
        <MissionCardModalTitle>
          <h1>{missionName}</h1>
          <h1>Projeto: Acessibilidade App</h1>
        </MissionCardModalTitle>
        <MissionCardModalDescription>
          <span>
            Esta missão crítica envolve a correção de problemas de
            acessibilidade no aplicativo de Previdência Federal, garantindo
            conformidade com as diretrizes WCAG 2.1. O foco está em melhorar a
            experiência para usuários com deficiências visuais e motoras,
            incluindo: leitores de tela, navegação por teclado e contraste de
            cores.
          </span>
        </MissionCardModalDescription>
        <ButtonContainer>
          <GoToMissionButton>
            <Link to={"/game/missoes/1"}> Link </Link>
          </GoToMissionButton>
        </ButtonContainer>
      </MissionCardModalContent>
    </MissionCardModalContainer>
  );
}
