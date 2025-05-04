import gameData from "../assets/db/dbgame.json";

export interface Achievements {
    Id: number;
    Nome: string;
    Descrição: string;
    Qtd_moedas: number;
    Imagem: string;
    Planeta_Id: string;
}

export async function fetchAchievement(): Promise<Achievements[]> {
  return Promise.resolve(gameData.Conquistas);
}
