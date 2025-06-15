import styled from "styled-components";

export const ShopContainer = styled.div`
  padding: 1rem 3rem;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    max-width: 80vw;
    min-height: 100vh;
    margin-bottom: 100px;
  }
`;

export const Header = styled.header`
  text-align: left;
  margin-bottom: 2rem;
  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    color: ${(props) => props.theme.colors.goldCoin};
  }
`;

export const Filter = styled.select`
  margin-bottom: 2rem;
  padding: 0.75rem;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
`;

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
`;

export const Card = styled.div`
  border: none;
  padding: 1.5rem;
  border-radius: 12px;
  background: ${(props) => props.theme.colors.secondary};
  text-align: center;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  }

  p {
    color: ${(props) => props.theme.colors.goldCoin};
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

export const Button = styled.button`
  margin-top: 1rem;
  background: ${(props) => props.theme.colors.gradients.tripulation};
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
  &:disabled {
    background: #555;
    cursor: not-allowed;
  }
`;

export const SelectQuantity = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
  }
`;

export const QuantityInput = styled.input`
  width: 60px;
  padding: 0.5rem;
  margin-top: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  text-align: center;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #ffcc00;
  }
`;

export const CartNotification = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  background: ${(props) => props.theme.colors.gradients.tripulation};
  color: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  animation:
    slideIn 0.5s ease-out,
    fadeOut 0.5s ease-in 2s forwards;
  @keyframes slideIn {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }
  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
`;

export const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  max-width: 100%;
  max-height: 100%;
  img {
    width: 50%;
    height: 50%;
    object-fit: contain;
    border-radius: 8px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    img {
    width: 90%;
    height: 90%;
   }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 10%;
  background: ${(props) => props.theme.colors.goldCoin};
  color: ${(props) => props.theme.colors.primary};
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
  transition: transform 0.2s ease;
  &:hover {
    transform: scale(1.1);
  }

  
`;
