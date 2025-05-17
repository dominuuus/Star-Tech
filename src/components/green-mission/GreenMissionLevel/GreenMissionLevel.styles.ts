import { styled } from "styled-components";

export const GreenMissionTrail = styled.div`
  background-color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 30px;
  padding-top: 40px;
  gap: 15px;
  padding: 30px 0;
  margin-left: 20px;

  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;

  cursor: grab;
  user-select: none;

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
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
  position: relative;
  overflow: hidden;
  img {
    width: 8rem;
    z-index: 2;
  }

  transition: transform 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.2) translateY(-15px);
    background-color: ${(props) =>
      props.theme.colors.mission.achievementMission};
    color: white;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: -50%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        120deg,
        transparent 0%,
        rgba(255, 255, 255, 0.4) 50%,
        transparent 100%
      );
      z-index: 1;
      transform: skewX(-20deg);
      animation: metallic-shine 0.5s linear 0s 2 forwards;
    }
  }

  @keyframes metallic-shine {
    0% {
      left: -50%;
    }
    100% {
      left: 100%;
    }
  }
`;

export const PhotosquareLevelGray = styled.div`
  width: 4rem;
  height: 4rem;
  background-color: ${(props) => props.theme.colors.gray.lighter};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30%;
  transition: transform 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.2) translateY(-8px);
    background-color: ${(props) => props.theme.colors.primary};
    color: white;
  }
`;
