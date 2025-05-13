import { useEffect, useState } from "react";
import { fetchSquad, Squad } from "../../../services/squadService";
import {
  CloseModalButton,
  MascotContainer,
  ModalContent,
  ModalProfile,
  ModalSubMenu,
  ProfileDescription,
  ProfileImage,
  ProfileInfo,
  SubMenuItem,
  TripulationModalContainer,
  TripulationModalContent,
  TripulationModalSquad,
  TripulationModalTitle,
  TripulationModalWrapper,
} from "./TripulationModal.styles";
import {
  CurrencyCircleDollar,
  Heart,
  PlusCircle,
  User,
  UsersThree,
} from "phosphor-react";

interface TripulationModalProps {
  onClose: () => void;
}

export function TripulationModal({ onClose }: TripulationModalProps) {
  const [tripulation, setTripulation] = useState<Squad[]>([]);

  useEffect(() => {
    fetchSquad().then(setTripulation).catch(console.error);
  }, []);

  return (
    <TripulationModalContainer>
      <TripulationModalContent>
        <TripulationModalWrapper>
          <TripulationModalTitle>
            <UsersThree size={23} weight="bold" />
            <span>Tripulação</span>
          </TripulationModalTitle>
          <CloseModalButton>
            <span onClick={onClose}>Fechar</span>
          </CloseModalButton>
        </TripulationModalWrapper>

        <TripulationModalSquad>
          {tripulation.map((squad) =>
            squad.Tripulação_User_id?.map((userId, userIndex) => (
              <ModalContent key={`${squad.id}-${userId}`}>
                <ModalProfile>
                  <span>
                    <ProfileImage
                      src={squad.Tripulação_User_imagem?.[userIndex]}
                      alt={`Imagem do usuário ${squad.Tripulação_User_nome?.[userIndex]}`}
                    />
                  </span>
                  <ProfileInfo>
                    <h2>{squad.Tripulação_User_cargo?.[userIndex]}</h2>
                    <h1>{squad.Tripulação_User_nome?.[userIndex]}</h1>
                    <h3>{squad.Tripulação_User_username?.[userIndex]}</h3>
                    <ProfileDescription>
                      <span>
                        {squad.Tripulação_User_descrição?.[userIndex]}
                      </span>
                    </ProfileDescription>
                  </ProfileInfo>
                  <span>Mascotes preferidos</span>

                  <MascotContainer>
                    {squad.Tripulação_User_Mascote_Imagem?.[userIndex]?.map(
                      (imagem, imgIndex) => (
                        <img
                          key={`${squad.id}-${userId}-mascote-${imgIndex}`}
                          src={imagem}
                          alt={`Mascote ${imgIndex + 1} de ${squad.Tripulação_User_nome?.[userIndex]}`}
                          title={`${squad.Tripulação_User_Mascote_Nome?.[userIndex]?.[imgIndex]}`}
                        />
                      )
                    )}
                  </MascotContainer>
                </ModalProfile>
                <ModalSubMenu>
                  <SubMenuItem>
                    <User weight="bold" />
                  </SubMenuItem>
                  <SubMenuItem>
                    <PlusCircle weight="bold" />{" "}
                  </SubMenuItem>
                  <SubMenuItem>
                    <Heart weight="bold" />{" "}
                  </SubMenuItem>
                  <SubMenuItem>
                    <CurrencyCircleDollar weight="bold" />{" "}
                  </SubMenuItem>
                </ModalSubMenu>
              </ModalContent>
            ))
          )}
        </TripulationModalSquad>
      </TripulationModalContent>
    </TripulationModalContainer>
  );
}
