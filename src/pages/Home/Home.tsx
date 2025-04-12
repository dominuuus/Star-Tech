import { HomeContainer, HomeSectionOne, HomeSectionTwo, SectionTwoStats, SectionTwoWelcome } from "./Home.styles";
import images from "../../assets/images";
import { SquadStats } from "../../components/SquadStats/SquadStats";
import { NewsAstronautBar } from "../../components/NewsAstronautBar/NewsAstronaut";
import { ProjectStats } from "../../components/ProjectStats/ProjectStats";

export function Home() {
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
            <NewsAstronautBar></NewsAstronautBar>
        </SectionTwoWelcome>

        <SectionTwoStats>
              <SquadStats></SquadStats>
              <ProjectStats></ProjectStats>
        </SectionTwoStats>

      </HomeSectionTwo>

    </HomeContainer>
  );
}
