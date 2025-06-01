import { styled } from "styled-components";

export const Profile = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 160px;
  height: 100vh;
  min-width: 90vw;
  margin-top: 1rem;

  a {
    color: ${(props) => props.theme.colors.primary};

    &:hover {
      color: ${(props) => props.theme.colors.white};
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    max-width: 80vw;
    height: fit-content;
    min-width: 80vw;
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

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    display: none;
  }
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
  color: black;
  max-width: 30rem;
  flex-wrap: wrap;
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

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    display: none;
  }
`;

export const MascotsTitle = styled.span`
  display: flex;
  flex-direction: row;
  font-weight: bold;
  align-items: center;
  flex-wrap: wrap;
`;

export const MascotsContainer = styled.div`
  display: flex;
  flex-direction: row;

  img {
    height: 5rem;
    transition: transform 0.2s ease-in-out;
    cursor: pointer;
    &:hover {
      transform: scale(1.2) translateY(-8px);
    }
  }
`;

export const AvatarContainer = styled.div`
  padding-top: 30px;
  padding-left: 1px;
  display: flex;
  color: white;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    padding-top: 0;
    padding-left: 0;
    max-width: 300px;
  }
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

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    width: 280px;
    height: 280px;

  }

  img {
    width: 60%;
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

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    position: absolute;
    top: 100%;
    left: 50%;
    gap: 30px;
  }
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
    background: ${({ theme }) => theme.colors.tertiary};
    color: ${({ theme }) => theme.colors.white};
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
