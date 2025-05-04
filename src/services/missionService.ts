import gameData from '../assets/db/dbgame.json';

export interface Mission {
    Id: number;
    Nome: string;
    Descrição: string;
    Objetivo_técnico: string;
    Tipo_Missão_Id: number;
    Progresso_missão: number;
    Status: string;
    Data_Criação: string;
    Data_Prazo: string;
    Data_Conclusão: string | null;
    Qtd_moedas: number;
    Fases_total?: number;
    Fases_concluidas?: number;
    Planeta_Id?: string;
    Projeto_Id?: string;
    Tech_Líder_id?: string;
    relativeDueDate?: string;
  }

  export async function fetchMission(): Promise<Mission[]> {
    return Promise.resolve(gameData.Missões)
  }