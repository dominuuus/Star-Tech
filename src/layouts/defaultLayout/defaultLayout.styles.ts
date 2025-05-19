import styled from "styled-components";

export const DefaultLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
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

export const DefaultLayoutContent = styled.div`
  display: flex;
  margin-top: 120px;
`;

export const MenuLayout = styled.div`
  position: fixed;
`;

export const OutletLayout = styled.div`
  margin-left: 4rem;
  margin-right: 2rem;
`;

export const HeaderContainer = styled.div`
  position: fixed;
`;
