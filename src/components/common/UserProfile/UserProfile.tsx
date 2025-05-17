import images from "../../../assets/images";
import { AstronautProfileContainer } from "./UserProfile.styles";

export function UserProfile() {
  return (
    <>
    <AstronautProfileContainer>
      <div>
        <h1>Nebula.dev</h1>
      </div>
      <div>
        <img src={images.astronaut1} alt="" />
      </div>
      </AstronautProfileContainer>
    </>
  );
}
