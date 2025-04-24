import styled from "styled-components";

export const AstronautContainer = styled.main`
    display: flex;
    flex-direction: row;
    width: 100%;


    img {
        height: 38rem;
    }
`;

const AstronautSections = styled.section`
    display: flex;
`;

export const AstronautSectionOne = styled(AstronautSections)`
    flex-direction: column;
`;

export const AstronautSectionTwo = styled.section`
    flex-direction: column;
    width: 100%;
    
`;

export const SectionTwoWelcome = styled.div`
    flex-direction: row;
    justify-content: space-between;
`;

export const SectionTwoStats = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2rem;
`;

export const MascotStyle = styled.div`
    background-color: gray;
`;

export const AchievementStyle = styled.div`
    background-color: gray;
`;

export const MissionUpdatesStyle = styled.div`
    background-color: gray;
    padding: 10px;
    border-radius: 1rem;
    font-size: 0.7rem;
`;

export const SpaceShipStyle = styled.div`
    background-color: gray;
`;

export const MissionStatusBar = styled.div`
    background-color: gray;
    width: 50%;
    border-radius: 1rem;
`;

export const MascotAndAchievementContainer = styled.div`
    display: grid;
    gap: 2rem;
    grid-template-columns: 50% 30% 20%;
`;


