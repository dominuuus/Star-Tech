import gameData from "../assets/db/dbgame.json";

export interface MainThemePlanet {
    Id: number;
    Nome: string;
    Descrição: string;
}

export async function fetchMainThemePlanet(): Promise<MainThemePlanet[]> {
  return Promise.resolve(gameData.Temas_Principais);
}