import styled from "styled-components";

export const SpaceshipContainer = styled.div`
  display: flex;
  flex-direction: row;

  h1 {
    font-size: 2rem;
  }
`;

export const MissionUpdatesContent = styled.div`
  width: 20rem;
  margin-left: 35rem;
`;

export const ExploredPlanetContainer = styled.div`
  display: flex;
  flex-direction: row;

  img {
    height: 5rem;
    cursor: pointer;

    &:hover {
        transform: scale(1.2);
        }
  }
`;

export const SpaceshipCardContainer = styled.div`
  img {
    height: 30rem;
    position: absolute;

  }
`;
