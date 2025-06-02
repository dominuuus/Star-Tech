import { Link } from "react-router-dom";
import { HeaderNotLogged } from "../../components/common/HeaderNotLogged/HeaderNotLogged";

export function NotFound() {
  return (

    <> 
    <HeaderNotLogged/>
      <div>
      <h1>404 - Página não encontrada</h1>
      <p>Oops! A página que você tentou acessar não existe.</p>
      <Link to="/">Voltar para a página inicial</Link>
    </div>
    </>
  )
}