import gameData from "../assets/db/dbgame.json";

export interface GreenMissions {
  Id: number;
  Nome: string;
  Descrição: string;
  Status: string;
  Qtd_moedas: number;
  Nível_Id: string;
}

export async function fetchGreenMission(): Promise<GreenMissions[]> {
  return Promise.resolve(gameData.Missões_Verdes);
}
