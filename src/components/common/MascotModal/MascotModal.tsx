import {
  ModalContent,
  ModalOverlay,
} from "./MascotModal.styles";

interface MascotModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function MascotModal({ isOpen, onClose, children }: MascotModalProps) {
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
