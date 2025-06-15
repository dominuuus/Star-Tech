import { api } from "../lib/axios";
import gameData from "../assets/db/db.json";
import { formatDate, getRelativeDate } from "../utils/dateUtils";

export interface Mission {
  id: number;
  Nome: string;
  Descrição: string;
  Objetivo_Técnico: string;
  Tipo_Missão_Nome: string;
  Progresso_missão: number;
  Status: string;
  Data_Criação?: string;
  Data_Prazo?: string;
  Data_Conclusão?: string;
  Concluído_em?: string; // Para exibição do campo sem transformação do FormatDate
  Qtd_moedas: number;
  Fases_Total?: number;
  Fases_Concluídas?: number;
  Planeta_Nome?: string;
  Projeto_Nome?: string;
  Tech_Líder_Nome?: string;
  relativeDueDate?: string;
  Tech_Líder_img?: string;
  Conquista_nome?: string;
  Conquista_img?: string;
  Conquista_descricao?: string;
}

interface RawMission {
  id: number;
  nome: string;
  descricao: string;
  objetivo_tecnico: string;
  tipo_missao: { id: number; nome: string; peso: number; cor: string };
  progresso_missao: number;
  status: { id: number; nome: string };
  data_criacao: string;
  data_prazo: string;
  data_conclusao: string | null;
  qtd_moedas: number;
  fases_total: number;
  fases_concluidas: number;
  planeta: { id: number; nome: string } | null;
  projeto: { id: number; nome: string } | null;
  tech_lider: { id: number; nome: string; imagem: string } | null;
  conquista: {
    id: number;
    nome: string;
    imagem: string;
    descricao: string;
  } | null;
}

const mapRawMissionToMission = (raw: RawMission): Mission => ({
  id: raw.id,
  Nome: raw.nome,
  Descrição: raw.descricao,
  Objetivo_Técnico: raw.objetivo_tecnico,
  Tipo_Missão_Nome: raw.tipo_missao.nome,
  Progresso_missão: raw.progresso_missao,
  Status: raw.status.nome,
  Data_Criação: formatDate(raw.data_criacao),
  Data_Prazo: formatDate(raw.data_prazo),
  Data_Conclusão: raw.data_conclusao ? raw.data_conclusao : undefined,
  Concluído_em: formatDate(raw.data_conclusao),
  Qtd_moedas: raw.qtd_moedas,
  Fases_Total: raw.fases_total,
  Fases_Concluídas: raw.fases_concluidas,
  Planeta_Nome: raw.planeta ? raw.planeta?.nome : undefined,
  Projeto_Nome: raw.projeto ? raw.projeto?.nome : undefined,
  Tech_Líder_Nome: raw.tech_lider ? raw.tech_lider?.nome : undefined,
  Tech_Líder_img: raw.tech_lider ? raw.tech_lider?.imagem : undefined,
  Conquista_nome: raw.conquista ? raw.conquista?.nome : undefined,
  Conquista_img: raw.conquista ? raw.conquista?.imagem : undefined,
  Conquista_descricao: raw.conquista ? raw.conquista?.descricao : undefined,
  relativeDueDate: getRelativeDate(raw.data_prazo),
});

export async function fetchMission(): Promise<Mission[]> {
  try {
    const response = await api.get("/missoes");
    const rawMissions: RawMission[] = response.data;
    if (!Array.isArray(rawMissions)) {
      throw new Error("Dados de missões inválidos retornados pela API");
    }
    return rawMissions.map(mapRawMissionToMission);
  } catch (error) {
    console.error("Erro ao buscar missões via API:", error);
    try {
      const rawMissions: RawMission[] = gameData.missoes;
      if (!Array.isArray(rawMissions)) {
        throw new Error("Dados de missões inválidos no db.json");
      }
      return rawMissions.map(mapRawMissionToMission);
    } catch (fallbackError) {
      console.error("Erro no fallback para db.json:", fallbackError);
      throw new Error(
        "Falha ao carregar missões. Verifique o JSON Server ou o arquivo db.json."
      );
    }
  }
}

export async function fetchMissionById(id: number): Promise<Mission> {
  try {
    const response = await api.get(`/missoes/${id}`);
    const rawMission: RawMission = response.data;
    if (!rawMission || typeof rawMission !== "object") {
      throw new Error(
        "Missão não encontrada ou dados inválidos retornados pela API"
      );
    }
    return mapRawMissionToMission(rawMission);
  } catch (error: unknown) {
    console.error(`Erro ao buscar missão ${id} via API:`, error);
    try {
      const rawMissions: RawMission[] = gameData.missoes;
      if (!Array.isArray(rawMissions)) {
        throw new Error("Dados de missões inválidos no db.json");
      }
      const rawMission = rawMissions.find((mission) => mission.id === id);
      if (!rawMission) {
        throw new Error(`Missão com id ${id} não encontrada no db.json`);
      }
      return mapRawMissionToMission(rawMission);
    } catch (fallbackError) {
      console.error("Erro no fallback para db.json:", fallbackError);
      throw new Error(
        `Falha ao carregar missão com id ${id}. Ou ela não existe.`
      );
    }
  }
}
