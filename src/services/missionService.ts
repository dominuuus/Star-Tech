import { api } from '../lib/axios';
import gameData from '../assets/db/db.json';
import { formatDate, getRelativeDate } from '../utils/dateUtils';

export interface Mission {
  Id: number;
  Nome: string;
  Descrição: string;
  Objetivo_Técnico: string;
  Tipo_Missão_Nome: string;
  Progresso_missão: number;
  Status: string;
  Data_Criação: string;
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
  Id: number;
  Nome: string;
  Descrição: string;
  Objetivo_Técnico: string;
  Tipo_Missão: { Id: number; Nome: string; Peso: number; Cor: string };
  Progresso_missão: number;
  Status: { Id: number; Nome: string };
  Data_Criação: string;
  Data_Prazo: string;
  Data_Conclusão: string | null;
  Qtd_moedas: number;
  Fases_Total: number;
  Fases_Concluídas: number;
  Planeta: { Id: number; Nome: string } | null;
  Projeto: { Id: number; Nome: string } | null;
  Tech_Líder: { Id: number; Nome: string } | null;
}

const mapRawMissionToMission = (raw: RawMission): Mission => ({
  Id: raw.Id,
  Nome: raw.Nome,
  Descrição: raw.Descrição,
  Objetivo_Técnico: raw.Objetivo_Técnico,
  Tipo_Missão_Nome: raw.Tipo_Missão.Nome,
  Progresso_missão: raw.Progresso_missão,
  Status: raw.Status.Nome,
  Data_Criação: raw.Data_Criação,
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
    const rawMissions: RawMission[] = response.data.data;
    if (!Array.isArray(rawMissions)) {
      throw new Error('Dados de missões inválidos retornados pela API');
    }
    return rawMissions.map(mapRawMissionToMission);
  } catch (error) {
    console.error('Erro ao buscar missões via API:', error);
    try {
      const rawMissions: RawMission[] = gameData.missoes.data;
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