import styled from "styled-components";

export const BadgeWrapper = styled.div`
    display: flex;
    flex-direction: row;
`

export const AchievementList = styled.ul`
    width: 46%;
    max-height: 65vh;
    overflow: hidden;
    overflow-y: scroll;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

export const AchievementItem = styled.li`
    list-style: none;
`

export const Badge = styled.button`
    display: flex;
    flex-direction: row;
    margin: 7px;
`

export const BadgeImg = styled.img`
    width: 150px;
    height: 150px;
`

export const AchievementDetail = styled.div`
    height: 65vh;
    display: flex;
    flex-direction: column;
    border: 1px solid white;
    justify-content: space-around;
    border-radius: 35px;
    width: 46%;
    margin-left: 20px;
`

export const AchievementDetailHead = styled.div`
    display: flex;
    flex-direction: row;
    height: 225px;
    width: 100%;
`

export const AchievementDetailFoot = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`

export const AchievementDetailImg = styled.img`
    width: 220px;
    height: 220px;
`

export const AchievementDetailContent = styled.div`
   font-size: 25px;
   align-self: center;
    
   
`

export const PlanetImage = styled.img`
  width: 150px;
  height: 150px;
  
`;

export const PlanetInfo = styled.div`
    display: flex;
    flex-direction: row;
`

export const PlanetInfoTexts = styled.div`
    align-self: center;
    margin-right: 15px;
`
