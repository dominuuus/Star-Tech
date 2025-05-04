import gameData from "../assets/db/dbgame.json";

export interface Medals {
    Id: number;
    Nome: string;
    Descrição: string;
    Tipo: string;
    Imagem: string;
}

export async function fetchMedal(): Promise<Medals[]> {
  return Promise.resolve(gameData.Medalhas);
}
