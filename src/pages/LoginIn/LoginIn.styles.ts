import styled from "styled-components";
import { Canvas } from "@react-three/fiber";

export const LoginInContainer = styled.section`
  min-height: 91vh;
  background:
    radial-gradient(
      2px 2px at 20% 10%,
      rgba(255, 255, 255, 0.9) 50%,
      transparent 52%
    ),
    radial-gradient(
      1.6px 1.6px at 70% 80%,
      rgba(255, 255, 255, 0.8) 50%,
      transparent 52%
    ),
    radial-gradient(
      1.2px 1.2px at 40% 60%,
      rgba(255, 255, 255, 0.6) 50%,
      transparent 52%
    ),
    radial-gradient(
      circle at 30% 30%,
      #07070b 0%,
      #0c0d14 35%,
      #11131d 55%,
      #1b1e2b 100%
    );

  background-repeat: repeat;
  background-size:
    200px 200px,
    120px 120px,
    80px 80px,
    100% 100%;

  /* ▼ animação suave */
  background-position:
    0 0,
    0 0,
    0 0,
    center;
  animation: starScroll 80s linear infinite;

  @keyframes starScroll {
    to {
      background-position:
        1000px 0,
        600px 0,
        400px 0,
        center;
    }
  }
`;

export const LoginInContent = styled.section`
  display: flex;
  flex-direction: row;
  height: 91vh;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    height: 70vh;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    height: 70vh;
  }
`;

export const AuthSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  gap: 20px;
  color: ${(props) => props.theme.colors.white};
  left: 60%;
  top: 50%;

  span {
    font-size: ${(props) => props.theme.fontSize.extraLarge};
    font-weight: bold;
  }

  button {
    width: 12rem;
    background: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.white};
    border: 0px;

    &:hover {
      background: ${(props) => props.theme.colors.gradients.tripulation};
      color: ${(props) => props.theme.colors.white};
      border: 0px;
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    left: 20%;
  }

`;

export const StyledCanvas = styled(Canvas)`
  right: 10%;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    right: 0;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    right: 0;
  }
`;
