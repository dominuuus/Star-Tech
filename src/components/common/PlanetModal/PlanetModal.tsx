import { ModalContent, ModalOverlay } from "./PlanetModal.styles";

interface PlanetModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function PlanetModal({ isOpen, onClose, children }: PlanetModalProps) {
  if (!isOpen) return null;

  return (
    <>
      <ModalOverlay onClick={onClose}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          {children}
        </ModalContent>
      </ModalOverlay>
    </>
  );
}
