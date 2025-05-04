import gameData from '../assets/db/dbgame.json';

export interface MissionsType {
    Id: number;
    Nome: string;
    Peso: number;
    Cor: string;
  }

  export async function fetchMissionType(): Promise<MissionsType[]> {
    return Promise.resolve(gameData.Tipos_Missões)
  }