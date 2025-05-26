import { useEffect, useRef, useState } from "react";
import {
  GreenMissionTrail,
  PhotoSquareLevelBlack,
  SquareLevel,
} from "./GreenMissionLevel.styles";
import achievements from "../../../../assets/achievements";
import { fetchGreenMission, GreenMission } from "../../../../services/greenMissionService";
import { MissionItem } from "./GreenMissionItem";

interface GreenMissionLevelProps {
  onSelectLevel: (levelId: number) => void;
}

export function GreenMissionLevel({ onSelectLevel }: GreenMissionLevelProps) {
  const [missions, setMissions] = useState<GreenMission[]>([]);
    const [selectedMissionId, setSelectedMissionId] = useState<number | null>(null);

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
    fetchGreenMission().then((data) => {
      setMissions(data);
      if (data.length > 0) {
        setSelectedMissionId(data[0].id);
        onSelectLevel(data[0].id);
      }
    }).catch(console.error);
  }, [onSelectLevel]);

    const handleMissionClick = (missionId: number) => {
    setSelectedMissionId(missionId);
    onSelectLevel(missionId);
  };

  return (
    <GreenMissionTrail
      ref={trailRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
        <SquareLevel onClick={() => handleMissionClick(0)}
        style={{ backgroundColor: selectedMissionId === 0 ? '#e0e0e0' : 'transparent' }}>
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
