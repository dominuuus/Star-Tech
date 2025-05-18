import { styled } from "styled-components";

export const Profile = styled.div`
  display: flex;
  flex-direction: row;
`;

export const AvatarContainer = styled.div`
  padding-top: 80px;
  padding-left: 50px;
  display: flex;
  flex-direction: row;
  gap: 0.1px;
`;
export const TightAvatarContainer = styled(AvatarContainer)`
  & > :first-child {
    margin-right: 0 !important;
    padding-right: 0 !important;
  }
`;

export const EditAvatarContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 90px;
`;

export const EditAvatar = styled.div`
  gap: 10px;
  padding: 8px;
  font-weight: bold;
  font-size: 10px;
  background-color: ${(props) => props.theme.colors.gray.light};
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    color: white;
  }
`;
