import { MissionFilterCardContainer } from "./MissionFilterCard.styled";

export function MissionFilterCard() {
    return (
        <>
        <MissionFilterCardContainer>
        <button>Missões atrasadas</button>
        <button>Missões em andamento</button>
        <button>Missões concluídas</button>
        </MissionFilterCardContainer>
        </>
    )
}