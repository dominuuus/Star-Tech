import styled from "styled-components";

export const MainTopMenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  align-items: center;
`;

export const NavigationContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-size: ${(props) => props.theme.fontSize.medium};

  ul {
    display: flex;
    flex-direction: row;
    gap: 5rem;
  }

  li {
    list-style: none;
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
  
`;

export const ProfileContainer = styled.div`
  width: 25rem;
  display: flex;
  justify-content: right;
`;
