import { useRef, useState } from "react";
import achievements from "../../../assets/achievements";
import {
  RocketLaunch, Alien, BugDroid, Calendar, Database, Vault,
  Tag, Magnet, Package, FacebookLogo, Scissors, Infinity, Ladder, Table, QrCode
} from "phosphor-react";
import {
  GreenMissionTrail,
  PhotoSquareLevelBlack,
  PhotosquareLevelGray,
  SquareLevel,
} from "./GreenMissionLevel.styles";
import mascots from "../../../assets/mascots";
import images from "../../../assets/images";

export function GreenMissionLevel() {
  const trailRef = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDown(true);
    setStartX(e.pageX - trailRef.current!.offsetLeft);
    setScrollLeft(trailRef.current!.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - trailRef.current!.offsetLeft;
    const walk = x - startX;
    trailRef.current!.scrollLeft = scrollLeft - walk;
  };

  return (
    <GreenMissionTrail
      ref={trailRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
        <SquareLevel>
          <PhotoSquareLevelBlack>
            <img src={achievements.diplomataCosmico} alt="" />
          </PhotoSquareLevelBlack>
          <span>Start</span>
        </SquareLevel>
        <SquareLevel>
          <PhotosquareLevelGray>
            <RocketLaunch size={65} weight="fill"/>
          </PhotosquareLevelGray>
          <span>Nivel 1</span>
        </SquareLevel>
        <SquareLevel>
          <PhotosquareLevelGray>
            <Alien size={65} weight="fill" />
          </PhotosquareLevelGray>
          <span>nivel 2</span>
        </SquareLevel>
        <SquareLevel>
          <PhotosquareLevelGray>
            <BugDroid size={65} weight="fill" />
          </PhotosquareLevelGray>
          <span>nivek 3</span>
        </SquareLevel>
        <SquareLevel>
          <PhotosquareLevelGray>
            <Calendar size={65} weight="fill" />
          </PhotosquareLevelGray>
          <span>nivel 4</span>
        </SquareLevel>
        <SquareLevel>
          <PhotosquareLevelGray>
            <Database size={65} weight="fill" />
          </PhotosquareLevelGray>
          <span>Nível 5</span>
        </SquareLevel>
        <SquareLevel>
          <PhotosquareLevelGray>
            <Vault size={65} weight="fill" />
          </PhotosquareLevelGray>
          <span>nível 6</span>
        </SquareLevel>
        <SquareLevel>
          <PhotoSquareLevelBlack>
            <img src={mascots.nebby} alt="" />
          </PhotoSquareLevelBlack>
          <span>Nebby</span>
        </SquareLevel>
        <SquareLevel>
          <PhotosquareLevelGray>
             <Tag size={65} weight="fill" />
          </PhotosquareLevelGray>
          <span>Nível 7</span>
        </SquareLevel>
        <SquareLevel>
          <PhotosquareLevelGray>
            <Magnet size={65} weight="fill" />
          </PhotosquareLevelGray>
           <span>Nível 8</span>
        </SquareLevel>
         <SquareLevel>
          <PhotosquareLevelGray>
             <Package size={65} weight="fill" />
          </PhotosquareLevelGray>
          <span>Nível 9</span>
        </SquareLevel>
        <SquareLevel>
          <PhotosquareLevelGray>
            <FacebookLogo size={65} weight="fill" />
          </PhotosquareLevelGray>
           <span>Nível 10</span>
        </SquareLevel>
        <SquareLevel>
          <PhotoSquareLevelBlack>
            <img src={images.coin} alt="" />
          </PhotoSquareLevelBlack>
          <span>Moedas</span>
        </SquareLevel>
        <SquareLevel>
          <PhotosquareLevelGray>
             <Scissors size={65} weight="fill" />
          </PhotosquareLevelGray>
          <span>Nível 11</span>
        </SquareLevel>
        <SquareLevel>
          <PhotosquareLevelGray>
            <Infinity size={65} weight="fill" />
          </PhotosquareLevelGray>
           <span>Nível 12</span>
        </SquareLevel>
         <SquareLevel>
          <PhotosquareLevelGray>
             <Ladder size={65} weight="fill" />
          </PhotosquareLevelGray>
          <span>Nível 13</span>
        </SquareLevel>
        <SquareLevel>
          <PhotosquareLevelGray>
            <Table size={65} weight="fill" />
          </PhotosquareLevelGray>
           <span>Nível 14</span>
        </SquareLevel>
         <SquareLevel>
          <PhotosquareLevelGray>
            <QrCode size={65} weight="fill" />
          </PhotosquareLevelGray>
           <span>Nível 15</span>
        </SquareLevel>
        <SquareLevel>
          <PhotoSquareLevelBlack>
            <img src={achievements.evolutivo} alt="" />
          </PhotoSquareLevelBlack>
          <span>Evolutivo</span>
        </SquareLevel>
        <SquareLevel>
          <PhotosquareLevelGray>
             <Scissors size={65} weight="fill" />
          </PhotosquareLevelGray>
          <span>Nível 16</span>
        </SquareLevel>
        <SquareLevel>
          <PhotosquareLevelGray>
            <Infinity size={65} weight="fill" />
          </PhotosquareLevelGray>
           <span>Nível 17</span>
        </SquareLevel>
         <SquareLevel>
          <PhotosquareLevelGray>
             <Ladder size={65} weight="fill" />
          </PhotosquareLevelGray>
          <span>Nível 18</span>
        </SquareLevel>
         <SquareLevel>
          <PhotoSquareLevelBlack>
            <img src={achievements.fundadorDaFrota} alt="" />
          </PhotoSquareLevelBlack>
          <span>Fundador</span>
        </SquareLevel>
        
        

      </GreenMissionTrail>
    
  );
}
