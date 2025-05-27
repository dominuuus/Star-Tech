import styled from "styled-components";

export const HangarContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  height: 100vh;
  width: 90vw;
`;

export const HangarListContainer = styled.div``;

export const SpachipContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  img {
    height: 5rem;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
    &:hover {
      transform: scale(1.2) translateY(-8px);
    }
  }
`;

export const HangarDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const HangarImageContainer = styled.div`
  min-width: 60vw;

  h1 {
    font-size: ${(props) => props.theme.fontSize.extraLarge};
  }
`;

export const SpaceshipInfoContainer = styled.div`
  min-width: 20rem;

  h3,
  span {
    font-size: ${(props) => props.theme.fontSize.medium};
  }
  ul {
    display: flex;
    flex-direction: column;
  }

  li {
    list-style: none;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${(props) => props.theme.colors.white};
    padding: 10px 10px;
  }
`;
