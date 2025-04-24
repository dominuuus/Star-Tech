import styled from "styled-components";

export const MainTopMenuContainer = styled.div`
    display: grid;
    grid-template-columns: 40% 20% 40%;
    gap: 2rem;
    align-items: center;
`

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
`

export const SearchContainer = styled.div`

    input {
    background-color: white;
    border-radius: 0.75rem;
    width: 15rem;
    height: 2.5rem;
    padding: 1rem;
    }
`

export const ProfileContainer = styled.div`
    width: 25rem;
`