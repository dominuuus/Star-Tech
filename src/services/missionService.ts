import { api } from '../lib/axios';
import gameData from '../assets/db/db.json';
import { formatDate, getRelativeDate } from '../utils/dateUtils';

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
}

interface RawMission {
  id: number;
  Nome: string;
  Descrição: string;
  Objetivo_Técnico: string;
  Tipo_Missão: { id: number; Nome: string; Peso: number; Cor: string };
  Progresso_missão: number;
  Status: { id: number; Nome: string };
  Data_Criação: string;
  Data_Prazo: string;
  Data_Conclusão: string | null;
  Qtd_moedas: number;
  Fases_Total: number;
  Fases_Concluídas: number;
  Planeta: { id: number; Nome: string } | null;
  Projeto: { id: number; Nome: string } | null;
  Tech_Líder: { id: number; Nome: string } | null;
}

const mapRawMissionToMission = (raw: RawMission): Mission => ({
  id: raw.id,
  Nome: raw.Nome,
  Descrição: raw.Descrição,
  Objetivo_Técnico: raw.Objetivo_Técnico,
  Tipo_Missão_Nome: raw.Tipo_Missão.Nome,
  Progresso_missão: raw.Progresso_missão,
  Status: raw.Status.Nome,
  Data_Criação: formatDate(raw.Data_Criação),
  Data_Prazo: formatDate(raw.Data_Prazo),
  Data_Conclusão: raw.Data_Conclusão ? raw.Data_Conclusão : undefined,
  Concluído_em: formatDate(raw.Data_Conclusão),
  Qtd_moedas: raw.Qtd_moedas,
  Fases_Total: raw.Fases_Total,
  Fases_Concluídas: raw.Fases_Concluídas,
  Planeta_Nome: raw.Planeta ? raw.Planeta?.Nome : undefined,
  Projeto_Nome: raw.Projeto ? raw.Projeto?.Nome : undefined,
  Tech_Líder_Nome: raw.Tech_Líder ? raw.Tech_Líder?.Nome : undefined,
  relativeDueDate: getRelativeDate(raw.Data_Prazo),
});

export async function fetchMission(): Promise<Mission[]> {
  try {
    const response = await api.get('/missoes');
    const rawMissions: RawMission[] = response.data;
    if (!Array.isArray(rawMissions)) {
      throw new Error('Dados de missões inválidos retornados pela API');
    }
    return rawMissions.map(mapRawMissionToMission);
  } catch (error) {
    console.error('Erro ao buscar missões via API:', error);
    try {
      const rawMissions: RawMission[] = gameData.missoes;
      if (!Array.isArray(rawMissions)) {
        throw new Error('Dados de missões inválidos no db.json');
      }
      return rawMissions.map(mapRawMissionToMission);
    } catch (fallbackError) {
      console.error('Erro no fallback para db.json:', fallbackError);
      throw new Error('Falha ao carregar missões. Verifique o JSON Server ou o arquivo db.json.');
    }
  }
}

export async function fetchMissionById(id: number): Promise<Mission> {
  try {
    const response = await api.get(`/missoes/${id}`);
    const rawMission: RawMission = response.data;
    if (!rawMission || typeof rawMission !== 'object') {
      throw new Error('Missão não encontrada ou dados inválidos retornados pela API');
    }
    return mapRawMissionToMission(rawMission);
  } catch (error: unknown) {
    console.error(`Erro ao buscar missão ${id} via API:`, error);
    try {
      const rawMissions: RawMission[] = gameData.missoes;
      if (!Array.isArray(rawMissions)) {
        throw new Error('Dados de missões inválidos no db.json');
      }
      const rawMission = rawMissions.find(mission => mission.id === id);
      if (!rawMission) {
        throw new Error(`Missão com id ${id} não encontrada no db.json`);
      }
      return mapRawMissionToMission(rawMission);
    } catch (fallbackError) {
      console.error('Erro no fallback para db.json:', fallbackError);
      throw new Error(`Falha ao carregar missão com id ${id}. Verifique o JSON Server ou o arquivo db.json.`);
    }
  }
}