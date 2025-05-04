import gameData from '../assets/db/dbgame.json';

export interface Users {
  Id: number;
  Nome: string;
  Email: string;
  Foto: string;
  Descrição: string;
  Estelares: number;
  Nível: number;
  Avatar_Id: string;
  Equipe_Id: string;
  Cargo: string;
}

export async function fetchUser(): Promise<Users[]> {
    return Promise.resolve(gameData.Usuários)
  }