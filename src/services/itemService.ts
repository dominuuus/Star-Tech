import gameData from '../assets/db/dbgame.json';

export interface Items {
    Id: number;
    Nome: string;
    Tipo: string;
    Descrição: string;
    Imagem: string;
    Status: string;
  }

  export async function fetchItem(): Promise<Items[]> {
    return Promise.resolve(gameData.Itens)
  }