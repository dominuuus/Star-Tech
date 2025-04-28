import { ModalContent, ModalOverlay } from "./AchievementModal.styles";

interface AchievementModalProps {
  isAchievementOpen: boolean;
  onAchievementClose: () => void;
  children: React.ReactNode;
}

export function AchievementModal({
  isAchievementOpen,
  onAchievementClose,
  children,
}: AchievementModalProps) {
  if (!isAchievementOpen) return null;

  return (
    <>
      <ModalOverlay onClick={onAchievementClose}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          {children}
        </ModalContent>
      </ModalOverlay>
    </>
  );
}
