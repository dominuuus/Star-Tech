import { useEffect, useState } from "react";
import { GreenMissionChallenge } from "../../../../services/greenMissionLevelService";
import { Cards, ChallengeIcon, ChallengeTitle, TitleCard } from "./GreenMissionCard.styles";
import { CheckCircle, LockSimple, LockSimpleOpen } from "phosphor-react";

interface GreenMissionCardProps {
  challenges: GreenMissionChallenge[];
  onChallengeSelect: (challenge: GreenMissionChallenge | null) => void;
}

export function GreenMissionCard({
  challenges,
  onChallengeSelect,
}: GreenMissionCardProps) {
  const [selectedChallengeId, setSelectedChallengeId] = useState<number | null>(
    null
  );

  const handleChallengeClick = (challenge: GreenMissionChallenge) => {
    setSelectedChallengeId(challenge.id);
    onChallengeSelect(challenge);
  };

  useEffect(() => {
    if (challenges.length > 0) {
      setSelectedChallengeId(challenges[0].id);
      onChallengeSelect(challenges[0]);
    } else {
      setSelectedChallengeId(null);
      onChallengeSelect(null);
    }
  }, [challenges, onChallengeSelect]);

  return (
    <>
      {challenges.map((challenge) => (
        <Cards>
          <TitleCard
            key={challenge.id}
            $isSelected={selectedChallengeId === challenge.id}
            $progress={challenge.progresso ?? 0}
            onClick={() => handleChallengeClick(challenge)}
          >
            <ChallengeTitle><span>{challenge.nome}</span></ChallengeTitle>
            <ChallengeIcon>
              {challenge.status.toLowerCase() === "concluído" ? (
                <CheckCircle size={20} weight="fill" />
              ) : challenge.status.toLowerCase() === "desbloqueado" ? (
                <LockSimpleOpen size={20} />
              ) : (
                <LockSimple size={20} />
              )}
            </ChallengeIcon>
          </TitleCard>
        </Cards>
      ))}
    </>
  );
}
