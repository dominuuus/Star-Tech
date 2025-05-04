import gameData from '../assets/db/dbgame.json';

export interface Project {
    Id: number;
    Nome: string;
    Descrição: string;
    Progresso: number;
    Equipe_Id: string;
    Planeta_Base_Id?: string;
    Planeta_Destino_Id?: string;
    Data_Início: string;
    Data_Prevista_Término?: string;
    Data_Conclusão: string | null;
    Status: string;
}

export async function fetchProject(): Promise<Project[]> {
    return Promise.resolve(gameData.Projetos);
}