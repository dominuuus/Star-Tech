import { CaretCircleRight } from "phosphor-react";
import { Cards } from "./GreenMissionCard.styles";

export function GreenMissionCard() {
  return (
    <>
      <Cards>
        <span>Faça o tour completo pela plataforma</span>
        <CaretCircleRight size={32} weight="fill" />
      </Cards>
      <Cards>
        <span>Curta o perfil de um parceiro de equipe</span>
        <CaretCircleRight size={32}/>
      </Cards>
      <Cards>
        <span>Dar um nome criativo para a sua nave</span>
        <CaretCircleRight size={32}/>
      </Cards>
      <Cards>
        <span>Escolha um novo planeta para visitar</span>
        <CaretCircleRight size={32}/>
      </Cards>
      <Cards>
        <span>Complete 100% do seu perfil</span>
        <CaretCircleRight size={32}/>
      </Cards>
      <div></div>
    </>
  );
}
