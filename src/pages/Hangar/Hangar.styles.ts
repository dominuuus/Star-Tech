import styled from "styled-components";
import { Canvas } from "@react-three/fiber";

export const HangarContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  height: 100vh;
  width: 90vw;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    height: 60rem;
    max-width: 80vw;
    padding: 1rem;
  }
`;

export const HangarListContainer = styled.div`
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    display: flex;
    flex-direction: row;
    max-width: 100vw;
    flex-wrap: wrap;
  }
`;

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

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    img {
      height: 3rem;
      cursor: pointer;
      transition: transform 0.2s ease-in-out;
      &:hover {
        transform: scale(1.2) translateY(-8px);
      }
    }
  }
`;

export const StyledCanvas = styled(Canvas)`
  top: 8%;
  left: 12%;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    position: relative;
    top: 38%;
    left: 12%;
  }
`;

export const BlockedShip = styled.div`
  position: absolute;
  top: 40%;
  left: 40%;
  font-size: 1.5rem;
  background-color: rgba(0, 0, 0, 0.744);
  color: #e2e2db;
  padding: 20px;
  border-radius: 20px;
`;

export const HangarDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const HangarImageContainer = styled.div`
  min-width: 60vw;

  h1 {
    font-size: ${(props) => props.theme.fontSize.extraLarge};
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    min-width: 60vw;

    h1 {
      font-size: ${(props) => props.theme.fontSize.large};
    }

    .ShipTitle {
      max-width: 80%;
    }
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

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    display: none;
  }
`;
