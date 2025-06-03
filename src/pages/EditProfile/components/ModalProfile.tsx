import { ReactNode, useEffect } from "react";
import ReactDOM from "react-dom";
import { Backdrop, ModalContainer, CloseBtn } from "./ModalProfile.style";
import { X } from "phosphor-react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ open, onClose, children }: ModalProps) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  if (!open) return null;

  return ReactDOM.createPortal(
    <>
      <Backdrop onClick={onClose} />
      <ModalContainer
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        <CloseBtn onClick={onClose}>
          <X size={20} weight="bold" />
        </CloseBtn>
        {children}
      </ModalContainer>
    </>,
    document.getElementById("modal-root")!
  );
}
