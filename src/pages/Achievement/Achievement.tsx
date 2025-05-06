import { AchievementCard } from "../../components/achievements/AchievementCard/AchievementCard"
import { AchievementTabs } from "../../components/achievements/AchievementTabs/AchievementTabs"
import { Wrapper } from "./Achievement.styles"

export function Achievement() {
    return (
        <>
            <h1>Achievement</h1>
            <Wrapper>
                <AchievementTabs/>
                <AchievementCard/>
            </Wrapper>
        </>
        
        
    )
}