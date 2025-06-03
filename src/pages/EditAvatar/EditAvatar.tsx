import { useState } from "react";
import {
  AstronautImage,
  BodyCell,
  Button,
  Cell,
  DiagonalLine,
  EditAvatarContainer,
  Equip,
  GridEquip,
  GridInventario,
  HorizontalLine,
  Inventory,
  InventoryButtons,
  LineWrapper,
  ScoreBox,
} from "./EditAvatar.styles";
import images from "../../assets/images";
import { Hand, Shield, TShirt } from "phosphor-react";

export function EditAvatar() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

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

  return (
    <EditAvatarContainer>
      <Inventory>
        <span>Inventário:</span>
        <InventoryButtons>
          <Button>Tudo</Button>
          <Button>Armas</Button>
          <Button>Trajes</Button>
        </InventoryButtons>
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
        <img src={images.astronaut1} alt="Astronauta" />
        <LineWrapper style={{ top: "80px", left: "180px" }}>
          <DiagonalLine />
          <HorizontalLine />
          <ScoreBox>+0 DEF</ScoreBox>
        </LineWrapper>

        <LineWrapper
          style={{ top: "220px", left: "60px" }}
          data-mirrored="true"
        >
          <DiagonalLine />
          <HorizontalLine />
          <ScoreBox>+12 DEF</ScoreBox>
        </LineWrapper>

        <LineWrapper style={{ top: "440px", left: "210px" }}>
          <DiagonalLine />
          <HorizontalLine />
          <ScoreBox>+3 DEF</ScoreBox>
        </LineWrapper>
      </AstronautImage>

      <Equip>
        <span>Itens equipados</span>
        <GridEquip>
          <Cell>
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
          <Cell />
        </GridEquip>
      </Equip>
    </EditAvatarContainer>
  );
}
