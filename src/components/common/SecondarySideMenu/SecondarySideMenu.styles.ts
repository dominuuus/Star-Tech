import styled from "styled-components";

export const MenuContainer = styled.div`
  background-color:#09152b;
  width: 2rem;
  height: 30rem;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  z-index: 100;
  position: fixed;
  left: 0;
  transition: 0.4s;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  padding: 10px 15px 10px 10px;
  div {
    margin-top: 20px;
  }

  &:hover {
    background-color: #09152b;
    width: 4rem;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    span {
        opacity: 1;
    }

    a {
        color: white;

        &:hover {
            color:rgb(86, 130, 213);
        }
    }
  }
`;
export const MenuItem = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.6rem;

  overflow: hidden;

  span {
    white-space: nowrap;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    cursor: pointer;
    width: 4rem;

  }

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const MenuIcon = styled.span``;

export const MenuBlockOne = styled.div`
  margin-top: 50px;
`;

export const MenuBlockTwo = styled.div`
  margin-bottom: 50px;
`;
