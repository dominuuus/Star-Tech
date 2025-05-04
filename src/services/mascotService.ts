import gameData from "../assets/db/dbgame.json";

export interface Mascots {
    Id: number;
    Nome: string;
    Descrição: string;
    Imagem: string;
    Planeta_Id: string;
    Titulo: string;
    Personalidade: string;
    Habilidade_Especial: string;
    Aparência: string;
}

export async function fetchMascot(): Promise<Mascots[]> {
  return Promise.resolve(gameData.Mascotes);
}
