import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(2px);
  z-index: 999;
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: min(90%, 400px);
  background: #fff;
  padding: 24px 20px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
  z-index: 1000;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  border: none;
  background: transparent;
  cursor: pointer;
`;
