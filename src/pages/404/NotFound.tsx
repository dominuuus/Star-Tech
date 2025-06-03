import images from "../../assets/images";
import { NotFoundContainer } from "./NotFound.styles";

export function NotFound() {
  return (
    <>
      <NotFoundContainer>
          <div>
            <p>
              Erro 404. 
            </p>
            <p>
              Página fora de órbita. 
            </p>
            <p>
              Talvez seja um buraco de minhoca inesperado.
            </p>
          </div>
          <div><img src={images.notfound} alt="" /></div>
      </NotFoundContainer>
    </>
  );
}
