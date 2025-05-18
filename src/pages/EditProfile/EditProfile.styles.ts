import { styled } from "styled-components";
import { UserProfile } from "../../components/common/UserProfile/UserProfile";

export const Profile = styled.div`
  display: flex;
  flex-direction: row;
  gap: 300px;
`;

export const PlanetAndCredentials = styled.div `
  display: flex;
  flex-direction: column;
  width: 25%;
`

export const AvatarCircle = styled.div `
  width: 940px;
  height: 940px;
  border: 2px solid;
  border-radius: 50%;
  overflow: visible;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
export const OrbitRing = styled.div`
  position: absolute;
  inset: 0;                      /* ocupa todo o AvatarCircle */
  animation: spin 20s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  /* planetas genéricos */
  .planet {
    position: absolute;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary};
  }

  /* planeta 1 – topo */
  .p1 {
    top: -9px;
    left: 50%;
    transform: translateX(-50%);
  }

  /* planeta 2 – direita */
  .p2 {
    bottom: -9px;
    left: calc(50% - 9px);
    background: black;
  }
`;

export const AvatarContainer = styled.div`
  padding-top: 80px;
  padding-left: 50px;
  display: flex;
  flex-direction: row;
  gap: 0.1px;
   
  
`;
export const TightAvatarContainer = styled(AvatarContainer)`
  & > :first-child {
    margin-right: 0 !important;
    padding-right: 0 !important;
  }
 
`;

export const SmallUserProfile = styled(UserProfile)`
    transform: scale(0.75);
  transform-origin: center;
`
export const EditAvatarContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 90px;
`;

export const EditAvatar = styled.div`
  gap: 10px;
  padding: 8px;
  font-weight: bold;
  font-size: 10px;
  background-color: ${(props) => props.theme.colors.gray.light};
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    color: white;
  }
`;

export const MascotsAndAchievements = styled.div `
  display: flex;
  flex-direction: column;
  width: 25%;
`
