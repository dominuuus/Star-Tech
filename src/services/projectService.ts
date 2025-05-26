import { api } from "../lib/axios";
import gameData from "../assets/db/db.json";

export interface Project {
  id: number;
  Nome: string;
  Descrição: string;
  Progresso: number;
  Equipe_Nome?: string;
  Planeta_Base_Nome?: string;
  Planeta_Destino_Nome?: string;
  Data_Início: string;
  Data_Prevista_Término?: string;
  Data_Conclusão?: string;
  Status?: string;
  icone: string;
}

interface RawProject {
  id: number;
  Nome: string;
  Descrição: string;
  Progresso: number;
  Equipe: { id: number; Nome: string } | null;
  Planeta_Base: { id: number; Nome: string } | null;
  Planeta_Destino: { id: number; Nome: string } | null;
  Data_Início: string;
  Data_Prevista_Término: string | null;
  Data_Conclusão: string | null;
  Status: { id: number; Nome: string } | null;
  icone: string;
}

const mapRawProjectToMascot = (raw: RawProject): Project => ({
    id: raw.id,
    Nome: raw.Nome,
    Descrição: raw.Descrição,
    Progresso: raw.Progresso,
    Equipe_Nome: raw.Equipe ? raw.Equipe?.Nome : undefined,
    Planeta_Base_Nome: raw.Planeta_Base ? raw.Planeta_Base?.Nome : undefined,
    Planeta_Destino_Nome: raw.Planeta_Destino ? raw.Planeta_Destino?.Nome : undefined,
    Data_Início: raw.Data_Início,
    Data_Prevista_Término: raw.Data_Prevista_Término ? raw.Data_Prevista_Término : undefined,
    Data_Conclusão: raw.Data_Conclusão ? raw.Data_Conclusão : undefined,
    Status: raw.Status ? raw.Status?.Nome : undefined,
    icone: raw.icone,
});

export async function fetchProject(): Promise<Project[]> {
  try {
    const response = await api.get("/projetos");
    const rawProjects: RawProject[] = response.data;
    if (!Array.isArray(rawProjects)) {
      throw new Error("Dados de projetos inválidos retornados pela API");
    }
    return rawProjects.map(mapRawProjectToMascot);
  } catch (error) {
    console.error("Erro ao buscar projetos via API:", error);
    try {
      const rawProjects: RawProject[] = gameData.projetos;
      if (!Array.isArray(rawProjects)) {
        throw new Error("Dados de projetos inválidos no db.json");
      }
      return rawProjects.map(mapRawProjectToMascot);
    } catch (fallbackError) {
      console.error("Erro no fallback para db.json:", fallbackError);
      throw new Error(
        "Falha ao carregar projetos. Verifique o JSON Server ou o arquivo db.json."
      );
    }
  }
}
