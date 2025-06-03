import styled from "styled-components";

export const AchievementDetailContainer = styled.div`
  width: 70%;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  border: 1px solid white;
  border-radius: 35px;
  padding: 25px;
  margin-left: 60px;
  background: ${(props) => props.theme.colors.secondary};
  top: 20px;
  overflow-y: auto;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    width: 18rem;
    margin-left: 0;
    margin-right: 50px;
    min-height: fit-content;
  }
`;

export const ButtonClose = styled.button`
  display: flex;
  align-self: flex-end;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.white};
`;

export const AchievementHeader = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 20px;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 0;
  }
`;

export const AchievementImage = styled.img`
  min-width: 220px;
  height: 220px;
  border-radius: 12px;
  flex-shrink: 0;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    min-width: 80px;
    height: 230px;
    border-radius: 0;
  }
`;

export const AchievementContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: ${(props) => props.theme.fontSize.large};
  color: ${(props) => props.theme.colors.white};
  gap: 5px;
  h2 {
    margin: 0 0 15px 0;
    font-size: ${(props) => props.theme.fontSize.extraLarge};
    color: #fff;
  }

  .description {
    margin-bottom: 15px;
    line-height: 1.5;
  }

  .stats {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 10px;

    p {
      background: rgba(255, 255, 255, 0.1);
      padding: 8px 15px;
      border-radius: 6px;
      margin: 0;
      white-space: nowrap;
    }
  }

  li {
    list-style: none;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;

export const AchievementFooter = styled.div`
  margin-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 20px;
`;

export const PlanetInfo = styled.div<{ $hasPlanet: boolean }>`
  display: flex;
  justify-content: ${({ $hasPlanet }) => ($hasPlanet ? "flex-end" : "center")};
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  .planet-text {
    text-align: right;

    h3 {
      margin: 0 0 5px 0;
      color: #fff;
    }

    span {
      color: #ccc;
    }
  }

  .planet-image {
    width: 150px;
    height: 150px;
    object-fit: contain;
    border-radius: 8px;
    flex-shrink: 0;
  }
`;

export const MascotesContainer = styled.div`
  margin-top: 30px;

  h4 {
    color: #fff;
    margin-bottom: 15px;
    font-size: ${(props) => props.theme.fontSize.large};
    text-align: center;
  }
`;

export const MascotesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

export const MascoteItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 100px;
`;

export const MascoteImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #fff;
  margin-bottom: 8px;
`;

export const MascoteName = styled.span`
  color: #fff;
  font-size: ${(props) => props.theme.fontSize.large};
  text-align: center;
`;

export const PlanetMapLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin: 0 auto;
  max-width: 300px;

  .planet-image {
    width: 200px;
    height: 200px;
    display: none;
  }

  .planet-name {
    color: #fff;
    font-size: ${(props) => props.theme.fontSize.extraLarge};
    margin-top: 10px;
    text-align: center;
  }
`;

export const CoinDisplay = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  margin-top: 0.9rem;
  span {
    font-size: ${(props) => props.theme.fontSize.extraLarge};
    font-weight: bold;
  }
`;

export const CoinIcon = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
`;
