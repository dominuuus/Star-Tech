import { useState } from "react";
import dbgame from "../../../assets/db/dbgame.json";
import {BadgeWrapper, AchievementList, AchievementItem, Badge, BadgeImg, AchievementDetail, AchievementDetailImg, AchievementDetailContent, AchievementDetailHead, AchievementDetailFoot, PlanetImage, PlanetInfo, PlanetInfoTexts} from "./AchievementCard.style"

interface badge {
    title: string;
    description: string;
    image: string;
    planet: string;
    planetName: string;
    
}

export function AchievementCard() {
    const [badge, setBadge] = useState<badge>()
    return (
        <BadgeWrapper>
           <AchievementList>
           {dbgame.achievements.map((item, index) => {
                const imageURL = new URL(`../../../assets/images/achievement/${item.image}`, import.meta.url).href;
                const planetURL = new URL(`../../../assets/images/planet/${item.planet}`, import.meta.url).href;
                return(
                    <AchievementItem key={index}>
                        <Badge onClick={() => {setBadge({...item, image: imageURL, planet: planetURL, planetName: item.planetName})}}>
                            <BadgeImg src={imageURL} alt="test" />
                        </Badge>
                    </AchievementItem>
                )
            })}
           </AchievementList>
           {
            badge && (
                <AchievementDetail>
                    <AchievementDetailHead>
                        <AchievementDetailImg src={badge?.image} alt="" />
                        <AchievementDetailContent>
                            <h3>{badge.title}</h3>
                            <p>{badge?.description}</p>
                        </AchievementDetailContent>
                    </AchievementDetailHead>
                    <AchievementDetailFoot>
                        <h2>{"2/5"}</h2>
                        {badge.planet && (
                            <PlanetInfo>
                                <PlanetInfoTexts>
                                    <h3>Planet</h3>
                                    <span>{badge.planetName}</span>
                                </PlanetInfoTexts>
                                <PlanetImage src={badge.planet} alt="Planeta associado" />
                            </PlanetInfo>
                        )}
                    </AchievementDetailFoot>
                </AchievementDetail>
            )
           }
        </BadgeWrapper>
    )
}