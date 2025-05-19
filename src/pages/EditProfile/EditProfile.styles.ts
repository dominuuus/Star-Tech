import { styled } from "styled-components";



export const Profile = styled.div`
  display: flex;
  flex-direction: row;
  gap: 200px;
`;

export const PlanetAndCredentials = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
`;

export const MascotsAndAchievements = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
`;



export const AvatarContainer = styled.div`
  padding-top: 30px;
  padding-left: 50px;
  display: flex;
`;

export const AvatarCircle = styled.div`
  width: 530px;
  height: 530px;
  border: 2px solid black;
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
  font-size: 11px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.gray.light};
  align-items: center;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
  }
`;

export const EstelarTitle = styled.div `
  position: absolute;
  top: 43%;
  left: 3%;
  font-weight: bold;



`
export const EstelarBalance = styled.div `
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
    right: -30px;
    height: 1px;
    background: black
  }
  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -8px;
    right: -10px;
    height: 1px;
    background: black
  }
`
export const Status = styled.div `
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
    background: black
  }
  &::before {
    content: "";
    position: absolute;
    left: -30px;
    right: 0;
    bottom: -8px;
    height: 1px;
    background: black
  }
`

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
    background: black;
  }

  /* topo */
  .p1 {
    top: -4.5px;
    left: 50%;
    transform: translateX(-50%);
  }

  /* base */
  .p2 {
    bottom: -4.5px;
    left: calc(50% - 9px);
    background: black;
  }
`;
