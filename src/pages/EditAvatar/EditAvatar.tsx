import { useRef, useState } from "react";
import {
  AstronautImage,
  BodyCell,
  Cell,
  EditAvatarContainer,
  Equip,
  GridEquip,
  GridInventario,
  Inventory,
  ZoomableAstronaut,
} from "./EditAvatar.styles";
import images from "../../assets/images";
import { Hand, Shield, TShirt } from "phosphor-react";
import { Boot } from "@phosphor-icons/react";

export function EditAvatar() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [zoomHead, setZoomHead] = useState(false);
  const astronautRef = useRef<HTMLDivElement>(null);

  const inventarioImages = [
    images.bracelete,
    images.capaceteColorido,
    images.capaceteCromado,
    images.celular,
    images.cilindro,
    images.jetPack,
    images.manopla,
    images.traje,
  ];

  const handleZoomClick = () => {
    setZoomHead((prev) => !prev);
    setTimeout(() => {
      astronautRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 50);
  };

  return (
    <EditAvatarContainer>
      <Inventory>
        <span>Inventário</span>
        <GridInventario>
          {inventarioImages.map((img, index) => (
            <Cell
              key={index}
              data-highlight={hoverIndex === index}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <img src={img} alt="" />
            </Cell>
          ))}
        </GridInventario>
      </Inventory>

      <AstronautImage>
        <ZoomableAstronaut ref={astronautRef} data-zoom={zoomHead}>
          <img src={images.astronaut1} alt="Astronauta" />
        </ZoomableAstronaut>
      </AstronautImage>

      <Equip>
        <span>Itens equipados</span>
        <GridEquip>
          <Cell onClick={handleZoomClick}>
            <img src={images.helmet} alt="Item 1" />
          </Cell>

          <BodyCell>
            <Cell>
              <Hand size={30} />
            </Cell>
            <Cell>
              <TShirt size={30} weight="fill" />
            </Cell>
            <Cell>
              <Shield size={30} weight="fill" />
            </Cell>
          
          </BodyCell>
          
          <Cell>
            <Boot size={30} weight="fill" />
          </Cell>
        </GridEquip>
      </Equip>
    </EditAvatarContainer>
  );
}
