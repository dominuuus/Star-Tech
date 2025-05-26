import { useEffect, useRef, useState } from "react";
import {
  GreenMissionTrail,
  PhotoSquareLevelBlack,
  SquareLevel,
} from "./GreenMissionLevel.styles";
import achievements from "../../../../assets/achievements";
import { fetchGreenMission, GreenMission } from "../../../../services/greenMissionService";
import { MissionItem } from "./GreenMissionItem";


export function GreenMissionLevel() {
  const [missions, setMissions] = useState<GreenMission[]>([]);
  const trailRef = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDown(true);
    setStartX(e.pageX - trailRef.current!.offsetLeft);
    setScrollLeft(trailRef.current!.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - trailRef.current!.offsetLeft;
    const walk = x - startX;
    trailRef.current!.scrollLeft = scrollLeft - walk;
  };

  useEffect(() => {
      fetchGreenMission().then(setMissions).catch(console.error);
    }, []);

  return (
    <GreenMissionTrail
      ref={trailRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
        <SquareLevel>
          <PhotoSquareLevelBlack>
            <img src={achievements.diplomataCosmico} alt="" />
          </PhotoSquareLevelBlack>
          <span>Start</span>
        </SquareLevel>

        {missions.map((mission) => (
        <SquareLevel key={mission.id}>
          <MissionItem mission={mission} />
        </SquareLevel>
      ))}

      </GreenMissionTrail>
    
  );
}
