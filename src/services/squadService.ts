import gameData from "../assets/db/dbgame.json";

export interface Squads {
  Id: number;
  Nome: string;
  Descrição: string;
  Nave_Id: string;
  Status: string;
}

export async function fetchSquad(): Promise<Squads[]> {
  return Promise.resolve(gameData.Equipes);
}
