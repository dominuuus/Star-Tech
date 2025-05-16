import achievements from "../../../assets/achievements";
import { RocketLaunch } from "phosphor-react";
import {
  GreenMissionTrail,
  PhotoSquareLevelBlack,
  PhotosquareLevelGray,
  SquareLevel,
} from "./GreenMissionLevel.styles";
export function GreenMissionLevel() {
  return (
    <>
      <GreenMissionTrail>
        <SquareLevel>
          <PhotoSquareLevelBlack>
            <img src={achievements.diplomataCosmico} alt="" />
          </PhotoSquareLevelBlack>
          <span>Start</span>
        </SquareLevel>
        <SquareLevel>
          <PhotosquareLevelGray>
            <RocketLaunch size={65} />
          </PhotosquareLevelGray>
          <span>Nivel 1</span>
        </SquareLevel>

        <span>Level 3</span>
        <span>Level 4</span>
        <span>Level 5</span>
      </GreenMissionTrail>
    </>
  );
}
