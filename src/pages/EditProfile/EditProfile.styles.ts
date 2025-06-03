import { styled } from "styled-components";

export const Profile = styled.div`
  display: flex;
  flex-direction: row;
  gap: 160px;
  height: 100vh;

  /* camadas — degradê + estrelas */
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

  a {
    color: ${(props) => props.theme.colors.primary};

    &:hover {
      color: ${(props) => props.theme.colors.white};
    }
  }
`;

export const PlanetAndCredentials = styled.div`
  display: flex;
  flex-direction: column;
  width: 15%;
  gap: 60px;
  font-weight: bold;
  align-items: center;
  color: white;
`;

export const PlanetTitle = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  img {
    width: 80%;
    height: auto;
  }
`;
export const CredentialTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
export const CredentialContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  text-align: justify;
  text-align: center;
  padding-left: 60px;
  color: black;
`;
export const CredentialContent2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  text-align: justify;
  text-align: center;
  padding-left: 60px;
  color: black;
`;

export const MascotsAndAchievements = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 15%;
  gap: 35px;
  padding-right: 50px;
  font-weight: bold;
  color: white;

  img {
    height: 7rem;
    transition: transform 0.2s ease-in-out;
    cursor: pointer;
    &:hover {
      transform: scale(1.2) translateY(-8px);
    }
  }
`;

export const MascotsTitle = styled.span`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  align-items: center;
  img {
    height: 10rem;
    transition: transform 0.2s ease-in-out;
    cursor: pointer;
    &:hover {
      transform: scale(1.2) translateY(-8px);
    }
  }
`;

export const AchievementsTitle = styled.div `
   display: flex;
  flex-direction: column;
  font-weight: bold;
  align-items: center;
  margin-top: 60px;
  gap: 22px;
  img {
    height: 10rem;
    transition: transform 0.2s ease-in-out;
    cursor: pointer;
    &:hover {
      transform: scale(1.2) translateY(-8px);
    }
  }
`

export const AvatarContainer = styled.div`
  padding-top: 30px;
  padding-left: 1px;
  display: flex;
  color: white;
`;

export const AvatarCircle = styled.div`
  width: 530px;
  height: 530px;
  border: 1px solid white;
  border-radius: 50%;
  position: relative;
  overflow: visible;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 50%;
    height: auto;
  }
`;

export const ActionPanel = styled.div`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 130px;
  z-index: 5;
`;

export const ActionButton = styled.div`
  display: inline-flex;
  gap: 6px;
  padding: 8px 10px;
  font-weight: bold;
  font-size: ${(props) => props.theme.fontSize.medium};
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.gray.light};
  color: black;
  align-items: center;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
  }
`;

export const EstelarTitle = styled.div`
  position: absolute;
  top: 43%;
  left: 3%;
  font-weight: bold;
`;
export const EstelarBalance = styled.div`
  position: absolute;
  top: 50%;
  left: 2%;
  display: flex;
  font-weight: bold;
  transform: translateY(-50%);
  align-items: center;
  p {
    margin: 0;
    display: inline-flex;
  }
  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -4px;
    right: -20px;
    height: 1px;
    background: white;
  }
  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -8px;
    right: 0px;
    height: 1px;
    background: white;
  }
`;
export const Status = styled.div`
  position: absolute;
  top: 50%;
  right: 2%;
  display: flex;
  font-weight: bold;
  transform: translateY(-50%);
  align-items: center;
  cursor: pointer;
  z-index: 6;

  &::after {
    content: "";
    position: absolute;
    right: 0;
    bottom: -4px;
    left: -60px;
    height: 1px;
    background: white;
  }
  &::before {
    content: "";
    position: absolute;
    left: -30px;
    right: 0;
    bottom: -8px;
    height: 1px;
    background: white;
  }
`;

export const OrbitRing = styled.div`
  position: absolute;
  inset: 0;
  animation: spin 20s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  .planet {
    position: absolute;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: white;
  }

  .p1 {
    top: -4.5px;
    left: 50%;
    transform: translateX(-50%);
  }

  .p2 {
    bottom: -4.5px;
    left: calc(50% - 9px);
    background: white;
  }
`;
