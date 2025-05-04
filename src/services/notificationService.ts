import gameData from "../assets/db/dbgame.json";

export interface Notifications {
  Id: number;
  Descrição: string;
  Data_Criação: string;
  Status: string;
  Usuário_Id: string;
  Equipe_Id: string;
  Projeto_Id: string;
  Tipo: string;
}

export async function fetchNotification(): Promise<Notifications[]> {
  return Promise.resolve(gameData.Notificações);
}
