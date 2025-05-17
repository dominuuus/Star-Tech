import styled from "styled-components";

export const UserPageContainer = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

export const MascotSection = styled.section`
  margin-top: 2rem;
`;

export const MascotCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const MascotImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
`;

export const MascotDetails = styled.div`
  flex: 1;
`;

export const ErrorMessage = styled.p`
  color: red;
  text-align: center;
`;