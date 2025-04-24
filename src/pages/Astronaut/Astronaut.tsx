import { HomeContainer, HomeSectionOne, HomeSectionTwo, SectionTwoStats, SectionTwoWelcome } from "./Astronaut.styles";
import images from "../../assets/images";
import { SquadStats } from "../../components/astronaut/ProjectStatusCard/ProjectStatusCard";
import { CaretCircleRight } from "phosphor-react";

export function Astronaut() {
  return (
    <HomeContainer>
      <HomeSectionOne>
        <div>
          <span>Nebula.dev</span>
        </div>
        <div>
          <img src={images.astronaut1} alt="" />
        </div>
      </HomeSectionOne>

      <HomeSectionTwo>
        <SectionTwoWelcome>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, hic corrupti. Laboriosam, impedit quos cumque laborum dolor eligendi voluptas repellat ipsum quae illum a quam tempore saepe magnam odit alias?</p>
            </div>
        </SectionTwoWelcome>

        <SectionTwoStats>
              <SquadStats></SquadStats>
              <CaretCircleRight size={32} weight="fill" />
        </SectionTwoStats>

      </HomeSectionTwo>

    </HomeContainer>
  );
}
