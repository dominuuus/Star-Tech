import styled from "styled-components";

export const AboutUsContainer = styled.div`
  min-height: 91vh;

  font-size: ${(props) => props.theme.fontSize.medium};

  h1 {
    color: #3271ab;
    font-size: 2rem;
    text-transform: uppercase;
    font-weight: 900;
  }

  p {
    font-size: ${(props) => props.theme.fontSize.large};
  }
`;

export const ProjectDescriptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 60px 200px;
  align-items: center;
  gap: 40px;
  img {
    height: 30rem;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    padding: 50px 50px 30px 50px;

    img {
      height: 20rem;
    }
  }
`;

export const StaffContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.colors.tertiary};
  padding: 60px 200px;
  gap: 40px;
  text-align: center;
`;

export const StaffContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 40px;

  flex-wrap: wrap;
`;

export const StaffMemberContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    height: 10rem;
    border-radius: 50%;
  }
`;

export const StaffMemberDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px 200px;
  justify-content: center;
  align-items: center;
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 100px;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;
