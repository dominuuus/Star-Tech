import styled from "styled-components";

export const GreenMissionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  background-color: inherit;
  height: 100vh;
  padding: 0 40px;
  color: ${(props) => props.theme.colors.white};
  h4 {
    font-weight: bold;
  }

  hr {
    width: 95%;
    margin-bottom: 20px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    max-width: 80vw;
    padding: 0;
    height: 100rem;
  }
`;

export const GreenMissionBar = styled.div`
  width: 90vw;
  height: 150px;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    max-width: 300px;
  }
`;

export const GreenMissionDetails = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  padding: 40px;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;

export const ListOfMissionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 30%;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    width: 100%;
  }
`;

export const MissionDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 10px;
  min-width: 70%;
  padding-bottom: 20px;
  height: fit-content;
  padding: 40px;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    min-width: 100%;
  }
`;

export const GoChallegeButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
`;

export const ChellengeRewardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 20px;
  div {
    display: flex;
    align-items: center;
    span {
      font-weight: bold;
    }
  }
  img {
    height: 3rem;
  }
`;

export const GoChallegeButton = styled.div`
  background-color: green;
  color: white;
  font-weight: bold;
  width: 180px;
  height: 2.8rem;
  margin-top: 100px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    padding:10px;
  }
`;
