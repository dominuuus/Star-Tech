import styled from "styled-components";

export const HangarContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  height: 100vh;
`;

export const HangarListContainer = styled.div`
  min-width: 200px;
`;

export const SpachipContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  img {
    height: 6rem;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
    &:hover {
      transform: scale(1.2) translateY(-8px);
    }
  }
`;

export const HangarDetailsContainer = styled.div``;
