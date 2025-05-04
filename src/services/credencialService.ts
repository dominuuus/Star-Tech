import gameData from "../assets/db/dbgame.json";

export interface Credentials {
  Id: number;
  Nome: string;
  Descrição: string;
  Status: string;
  Tipo: string;
}

export async function fetchCredential(): Promise<Credentials[]> {
  return Promise.resolve(gameData.Credenciais);
}
