import styled from "styled-components";

export const HomeContainer = styled.main`
    display: flex;
    flex-direction: row;
    width: 100%;


    img {
        height: 38rem;
    }
`;

const HomeSections = styled.section`
    display: flex;
`;

export const HomeSectionOne = styled(HomeSections)`
    flex-direction: column;
`;

export const HomeSectionTwo = styled(HomeSections)`
    flex-direction: column;
    
`;

export const SectionTwoWelcome = styled(HomeSections)`
    flex-direction: row;
    grid-template-columns: 80% 20%;
`;

export const SectionTwoStats = styled(HomeSections)`
    flex-direction: row;
    gap: 2rem;
`;
