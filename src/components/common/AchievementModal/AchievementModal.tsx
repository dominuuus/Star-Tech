import { useEffect, useState } from "react";
import {
  Achievement,
  fetchAchievement,
} from "../../../services/achievementService";
import {
  AchievementContent,
  AchievementDescriptionContainer,
  CloseModalButton,
  ModalButtons,
  ModalContent,
  ModalContentDescription,
  ModalContentInfo,
  ModalContentWrapper,
  ModalOverlay,
} from "./AchievementModal.styles";

import images from "../../../assets/images";

interface AchievementModalProps {
  isOpen: boolean;
  onClose: () => void;
  achievement: Achievement | null;
}

export function AchievementModal({
  isOpen,
  onClose,
  achievement,
}: AchievementModalProps) {
  if (!isOpen || !achievement) return null;

  return (
    <>
      <ModalOverlay onClick={onClose}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <ModalContentWrapper>
            <ModalContentInfo>
              <img src={achievement.Imagem} alt={achievement.Descrição} />
            </ModalContentInfo>
            <ModalContentDescription>
              <AchievementDescriptionContainer>
                <h1>{achievement.Nome}</h1>
                <h2>{achievement.Descrição}</h2>
                <div>
                  <p>{achievement.Tarefas}</p>
                  <div>
                    <img src={images.coin} />
                    <span>{achievement.Qtd_moedas}</span>
                  </div>
                </div>
                <ModalButtons>
                  <CloseModalButton onClick={onClose}>Fechar</CloseModalButton>
                </ModalButtons>
              </AchievementDescriptionContainer>
            </ModalContentDescription>
          </ModalContentWrapper>
        </ModalContent>
      </ModalOverlay>
    </>
  );
}

interface AchievementListProps {
  achievements: Achievement[];
}

function AchievementList({ achievements }: AchievementListProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAchievement, setSelectedAchievement] =
    useState<Achievement | null>(null);

  const openAchievementModal = (achievement: Achievement) => {
    setSelectedAchievement(achievement);
    setIsModalOpen(true);
  };

  const closeAchievementModal = () => {
    setSelectedAchievement(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <AchievementContent>
        {achievements.map((mascot) => (
          <div key={mascot.id}>
            <img
              src={mascot.Imagem}
              alt={mascot.Nome}
              onClick={() => openAchievementModal(mascot)}
            />
          </div>
        ))}
      </AchievementContent>
      <AchievementModal
        isOpen={isModalOpen}
        onClose={closeAchievementModal}
        achievement={selectedAchievement}
      />
    </>
  );
}

export function AchievementPage() {
  const [achievements, setAchievements] = useState<Achievement[]>([]);

  useEffect(() => {
    fetchAchievement().then(setAchievements).catch(console.error);
  }, []);

  return <AchievementList achievements={achievements} />;
}
