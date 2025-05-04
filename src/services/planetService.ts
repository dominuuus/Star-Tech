import gameData from "../assets/db/dbgame.json";

export interface Planets {
    Id: number;
    Nome: string;
    Descrição: string;
    Status: string;
    Qtd_missões: number;
    Tema_Principal_Id: string;
    Imagem: string;
}

export async function fetchPlanet(): Promise<Planets[]> {
  return Promise.resolve(gameData.Planetas);
}
