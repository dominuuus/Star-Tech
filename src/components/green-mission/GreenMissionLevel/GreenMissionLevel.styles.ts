import { styled } from "styled-components";

export const GreenMissionTrail = styled.div`
  background-color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 30px;
  padding-top: 40px;
  gap: 20px;
`;

export const SquareLevel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const PhotoSquareLevelBlack = styled.div`
  width: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 18%;
  img {
    width: 8rem;
  }
`;

export const PhotosquareLevelGray = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.gray.light};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30%;
`;
