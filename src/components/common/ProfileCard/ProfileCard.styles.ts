import styled from "styled-components";

export const ProfileCardContainer = styled.div`
  background: ${(props) => props.theme.colors.secondary};
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 10px;
  border-radius: 10px;

  img {
    height: 2.5rem;
    border-radius: 0.5rem;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    height: 9rem;
    gap: 0;

    img {
      height: 3.5rem;
      border-radius: 0.5rem;
    }
  }
`;

export const ProfileContent = styled.div`
  display: flex;
  width: 13rem;
  align-items: center;
  gap: 10px;

  h1 {
    font-size: 1rem;
    font-weight: bold;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    align-items: center;
    justify-content: center;
  }
`;

export const NotificationContainer = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 50%;
  text-align: center;
  width: 2.5rem;
  height: 2.5rem;
  padding: 0.5rem;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 15px;
  }
`;

export const CoinContainer = styled.div`
  display: flex;
  align-items: center;

  span {
    color: ${(props) => props.theme.colors.goldCoin};
    font-weight: bold;
  }

  img {
    height: 2.5rem;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    img {
    height: 2.5rem;
  }
  }
`;
export const NotificationCoinContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-right: 10px;
  align-items: center;
`;
