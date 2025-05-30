import styled from "styled-components";

export const HeaderContainer = styled.section`
  width: 100vw;
  display: flex;
  align-items: center;
  padding: 10px;
  color: ${(props) => props.theme.colors.white};
  height: 5rem;
  justify-content: space-between;
  font-size: ${(props) => props.theme.fontSize.medium};

  img {
    height: 3rem;
  }
`;

export const LogoContainer = styled.div`
  padding: 0 2rem;
`;

export const MainTopMenuContainer = styled.div`
  display: grid;
  grid-template-columns: 40% 20% 40%;
  gap: 2rem;
  align-items: center;
  padding: 0 3rem;
`;

export const NavigationContainer = styled.div`
  display: flex;
  flex-direction: row;

  ul {
    display: flex;
    flex-direction: row;
    gap: 5rem;
  }

  li {
    list-style: none;
  }
`;
