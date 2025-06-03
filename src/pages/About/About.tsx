import { LinkedinLogo } from "phosphor-react";
import images from "../../assets/images";
import staff from "../../assets/staff";
import {
  AboutUsContainer,
  FooterContainer,
  FooterContent,
  ProjectDescriptionContainer,
  StaffContainer,
  StaffContent,
  StaffMemberContainer,
  StaffMemberDetailsContainer,
} from "./About.styles";
import { GithubLogoIcon } from "@phosphor-icons/react";

export function AboutUs() {
  return (
    <>
      <AboutUsContainer>
        <ProjectDescriptionContainer>
          <div>
            <div>
              <p>
                O projeto <strong>Star Tech</strong> foi desenvolvido por alunos
                do curso de ADS da Faculdade Senac PE na Residência Tecnológica
                do Porto Digital. O desafio foi proposto pelo Banco do Brasil
                para resolver o problema da elevada quantidade de pequenos
                problemas nos softwares que torna o sistema mais complexo,
                dificulta a manutenção e reduz a produtividade da equipe. A
                plataforma traz uma gamificação com temática espacial onde as
                missões serão apresentadas por prioridade, as equipes ganham
                recompensas ao melhorar o sistema, assim promovendo qualidade,
                colaboração e engajamento contínuo. Acesse o repositório do
                projeto no{" "}
                <a href="https://github.com/dominuuus/Star-Tech">
                  <strong>GitHub</strong>
                </a>
                .
              </p>
            </div>
          </div>

          <div>
            <img src={images.aboutStarTech} alt="" />
          </div>
        </ProjectDescriptionContainer>

        <StaffContainer>
          <StaffContent>
            <StaffMemberContainer>
              <img src={staff.ayrton} alt="" />
              <StaffMemberDetailsContainer>
                <h2>Ayrton Oliveira</h2>
                <span>Desenvolvedor</span>
                <div>
                  <a href="https://www.linkedin.com/in/ayrtonoliveira70411/" target="blank">
                    <LinkedinLogo size={32} />
                  </a>
                  <a href="https://github.com/AyrtonOliveira" target="blank">
                    <GithubLogoIcon size={32} />
                  </a>
                </div>
              </StaffMemberDetailsContainer>
            </StaffMemberContainer>
            <StaffMemberContainer>
              <img src={staff.domingos} alt="" />
              <StaffMemberDetailsContainer>
                <h2>Domingos Santiago</h2>
                <span>Gestor do Projeto & Dev.</span>
                <div>
                  <a href="https://www.linkedin.com/in/domingos-s-santiago/" target="blank">
                    <LinkedinLogo size={32} />
                  </a>
                  <a href="https://github.com/dominuuus" target="blank">
                    <GithubLogoIcon size={32} />
                  </a>
                </div>
              </StaffMemberDetailsContainer>
            </StaffMemberContainer>
            <StaffMemberContainer>
              <img src={staff.gilberto} alt="" />
              <StaffMemberDetailsContainer>
                <h2>Gilberto Quintino</h2>
                <span>Doc. & Geração de Imagens</span>
                <div>
                  <a href="https://www.linkedin.com/in/gilberto-quintino-2880b71bb/" target="blank">
                    <LinkedinLogo size={32} />
                  </a>
                  <a href="https://github.com/gilbertoquintino" target="blank">
                    <GithubLogoIcon size={32} />
                  </a>
                </div>
              </StaffMemberDetailsContainer>
            </StaffMemberContainer>
            <StaffMemberContainer>
              <img src={staff.giseli} alt="" />
              <StaffMemberDetailsContainer>
                <h2>Giseli Felix</h2>
                <span>Doc. & Geração de Imagens</span>
                <div>
                  <a href="https://www.linkedin.com/in/giseli-felix-b1a297233/" target="blank">
                    <LinkedinLogo size={32} />
                  </a>
                  <a href="https://github.com/giseli25" target="blank">
                    <GithubLogoIcon size={32} />
                  </a>
                </div>
              </StaffMemberDetailsContainer>
            </StaffMemberContainer>
            <StaffMemberContainer>
              <img src={staff.joao} alt="" />
              <StaffMemberDetailsContainer>
                <h2>João Vitor Malveira</h2>
                <span>Desenvolvedor</span>
                <div>
                  <a href="https://www.linkedin.com/in/jo%C3%A3o-vitor-malveira-0728b218a/" target="blank">
                    <LinkedinLogo size={32} />
                  </a>
                  <a href="https://github.com/Malveira16" target="blank">
                    <GithubLogoIcon size={32} />
                  </a>
                </div>
              </StaffMemberDetailsContainer>
            </StaffMemberContainer>
            <StaffMemberContainer>
              <img src={staff.leticia} alt="" />
              <StaffMemberDetailsContainer>
                <h2>Letícia Mendes</h2>
                <span>Documentação</span>
                <div>
                  <a href="https://www.linkedin.com/in/let%C3%ADcia-mendes-portela-9934ba2a9" target="blank">
                    <LinkedinLogo size={32} />
                  </a>
                  <a href="https://github.com/leticiamendesz" target="blank">
                    <GithubLogoIcon size={32} />
                  </a>
                </div>
              </StaffMemberDetailsContainer>
            </StaffMemberContainer>
            <StaffMemberContainer>
              <img src={staff.lucas} alt="" />
              <StaffMemberDetailsContainer>
                <h2>Lucas Matheus</h2>
                <span>Modelagem 3D</span>
                <div>
                  <a href="https://www.linkedin.com/in/lucas-m-cunha-9063a0322/" target="blank">
                    <LinkedinLogo size={32} />
                  </a>
                  <a href="https://github.com/LucasMOCunha" target="blank">
                    <GithubLogoIcon size={32} />
                  </a>
                </div>
              </StaffMemberDetailsContainer>
            </StaffMemberContainer>
            <StaffMemberContainer>
              <img src={staff.clara} alt="" />
              <StaffMemberDetailsContainer>
                <h2>Maria Clara Melo</h2>
                <span>Desenvolvedora</span>
                <div>
                  <a href="https://www.linkedin.com/in/maria-clara-de-melo-11b145247/" target="blank">
                    <LinkedinLogo size={32} />
                  </a>
                  <a href="https://github.com/ClaraMelo72" target="blank">
                    <GithubLogoIcon size={32} />
                  </a>
                </div>
              </StaffMemberDetailsContainer>
            </StaffMemberContainer>
            <StaffMemberContainer>
              <img src={staff.thayana} alt="" />
              <StaffMemberDetailsContainer>
                <h2>Thayana Lira</h2>
                <span>Eng. de Requisitos</span>
                <div>
                  <a href="https://www.linkedin.com/in/thayanalira/" target="blank">
                    <LinkedinLogo size={32} />
                  </a>
                  <a href="https://github.com/thayanalira" target="blank"> 
                    <GithubLogoIcon size={32} />
                  </a>
                </div>
              </StaffMemberDetailsContainer>
            </StaffMemberContainer>
          </StaffContent>
        </StaffContainer>

        <FooterContainer>
          <FooterContent>
            <StaffMemberContainer>
              <img src="https://media.licdn.com/dms/image/v2/D4D03AQFYHvh1vuPBqQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1677525410611?e=1754524800&v=beta&t=JWU__oZ3NsRuYCfmu_mdoOP5u8mXxOmxREk8mPsw2a0" alt="" />
              <StaffMemberDetailsContainer>
                <h2>Lucas Linard</h2>
                <span>Product Owner</span>
                <span>Time de QA do Banco do Brasil</span>
                <div>
                  <a href="https://www.linkedin.com/in/lucaslinard/" target="blank">
                    <LinkedinLogo size={32} />
                  </a>
                </div>
              </StaffMemberDetailsContainer>
            </StaffMemberContainer>
            <StaffMemberContainer>
              <img
                src="https://media.licdn.com/dms/image/v2/D4D03AQHQ4vcwWTkV9Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1695589612094?e=1754524800&v=beta&t=dAAjI3gKYIIWjMqy4iUKjRiD7PFRCWll0-wWp5prMyM"
                alt=""
              />
              <StaffMemberDetailsContainer>
                <h2>Matheus de La Barra</h2>
                <span>Mentor do Porto Digital</span>
                <div>
                  <a href="https://www.linkedin.com/in/matheusdelabarra/" target="blank">
                    <LinkedinLogo size={32} />
                  </a>
                </div>
              </StaffMemberDetailsContainer>
            </StaffMemberContainer>
          </FooterContent>
        </FooterContainer>
      </AboutUsContainer>
    </>
  );
}
