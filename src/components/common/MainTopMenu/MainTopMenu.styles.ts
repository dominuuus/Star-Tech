import styled from "styled-components";

interface TopMenuProps {
  $isOpen: boolean;
}

export const MainTopMenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  position: relative;
  background-color: ${(props) => props.theme.colors.background};
  z-index: 1000;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    flex-wrap: wrap;
    justify-content: right;
    padding: 0.5rem;
  }
`;

export const HamburgerIcon = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 25px;
  height: 20px;
  cursor: pointer;
  z-index: 1001;

  div {
    width: 100%;
    height: 3px;
    background-color: ${(props) => props.theme.colors.white};
    border-radius: 2px;
    transition: all 0.4s ease;
  }

  &.open div:nth-child(1) {
    transform: rotate(-45deg) translate(-5px, 6px);
  }

  &.open div:nth-child(2) {
    opacity: 0;
  }

  &.open div:nth-child(3) {
    transform: rotate(45deg) translate(-5px, -6px);
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    display: flex;
  }
`;

export const NavigationContainer = styled.div<TopMenuProps>`
  display: flex;
  flex-direction: row;
  font-size: ${(props) => props.theme.fontSize.medium};
  align-items: center;

  nav {
    display: flex;
    flex-direction: row;
  }

  ul {
    display: flex;
    flex-direction: row;
    gap: 5rem;
    margin: 0;
    padding: 0;
    transition: transform 0.3s ease-in-out;
  }

  li {
    list-style: none;
  }

  a, span {
    color: ${(props) => props.theme.colors.white};
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: ${(props) => props.theme.colors.linkHover};
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    position: fixed;
    top: 0;
    right: 0;
    width: 70%;
    height: 100vh;
    background-color: ${(props) => props.theme.colors.tertiary};
    transform: translateX(${(props) => (props.$isOpen ? "0" : "100%")});
    transition: transform 0.3s ease-in-out;
    z-index: 1000;
    padding-top: 60px; 
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);

    nav {
      width: 100%;
      height: 100%;
    }

    ul {
      flex-direction: column;
      gap: 2rem;
      padding: 1rem;
      align-items: flex-start;
    }

    li {
      width: 100%;
    }

    a, span {
      display: block;
      padding: 0.5rem 0;
      font-size: ${(props) => props.theme.fontSize.large};
    }
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${(props) => props.theme.colors.news};
  border-radius: 0.75rem;
  padding: 0 0 0 1rem;
  color: ${(props) => props.theme.colors.primary};
  gap: 10px;

  input {
    background-color: ${(props) => props.theme.colors.news};
    border-top-right-radius: 0.75rem;
    border-bottom-right-radius: 0.75rem;
    width: 15rem;
    height: 2.5rem;
    padding: 1rem;
    border: none;

    &::placeholder {
      color: ${(props) => props.theme.colors.primary};
    }

    &:focus {
      box-shadow: 0 0 0 0;
      border: 0 none;
      outline: 0;
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    display: none;
  }
`;

export const ProfileContainer = styled.div`
  width: 25rem;
  display: flex;
  justify-content: right;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    display: none;
  }
`;