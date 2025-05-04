import gameData from "../assets/db/dbgame.json";

export interface Spaceships {
    Id: number;
    Nome: string;
    Descrição: string;
    Status: string;
    Planeta_Origem_Id: string;
    Planeta_Destino_Id: string;
    Progresso_Trajeto: string;
    Imagem: string;
}

export async function fetchSpaceship(): Promise<Spaceships[]> {
  return Promise.resolve(gameData.Naves);
}
