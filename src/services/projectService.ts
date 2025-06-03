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
  nome: string;
  descricao: string;
  progresso: number;
  equipe: { id: number; nome: string } | null;
  planeta_base: { id: number; nome: string } | null;
  planeta_destino: { id: number; nome: string } | null;
  data_inicio: string;
  data_prevista_termino: string | null;
  data_conclusao: string | null;
  status: { id: number; nome: string } | null;
  icone: string;
}

const mapRawProjectToMascot = (raw: RawProject): Project => ({
    id: raw.id,
    Nome: raw.nome,
    Descrição: raw.descricao,
    Progresso: raw.progresso,
    Equipe_Nome: raw.equipe ? raw.equipe?.nome : undefined,
    Planeta_Base_Nome: raw.planeta_base ? raw.planeta_base?.nome : undefined,
    Planeta_Destino_Nome: raw.planeta_destino ? raw.planeta_destino?.nome : undefined,
    Data_Início: raw.data_inicio,
    Data_Prevista_Término: raw.data_prevista_termino ? raw.data_prevista_termino : undefined,
    Data_Conclusão: raw.data_conclusao ? raw.data_conclusao : undefined,
    Status: raw.status ? raw.status?.nome : undefined,
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
