import gameData from "../assets/db/dbgame.json";

export interface GreenMissionLevels {
    Id: number;
    Nome: string;
    Ordem: number;
    Status: string;
}

export async function fetchGreenMissionLevel(): Promise<GreenMissionLevels[]> {
  return Promise.resolve(gameData.Níveis_Missões_Verdes);
}
