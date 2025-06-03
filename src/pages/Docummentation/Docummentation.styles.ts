import styled from "styled-components";

export const DocummentationContainer = styled.div`
  color: ${(props) => props.theme.colors.primary};
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    margin-left: 10px;
  }
`;

export const DocumentationLayout = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

export const DocummentationContent = styled.div`
  flex: 1;
  padding: 2rem;
  display: flex;
  justify-content: center;
  overflow-y: auto;
  min-width: 55rem;
  max-width: 55rem;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    min-width: 300px;
    max-width: 300px;
    padding: 0;
  }
`;

export const SecondaryTabContainerNav = styled.div`
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    display: none;
  }
`;
