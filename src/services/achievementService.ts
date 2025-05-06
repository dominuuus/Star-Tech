import gameData from "../assets/db/db.json";
import { api } from "../lib/axios";

export interface Achievement {
    id: number;
    Nome: string;
    Descrição: string;
    Tarefas?: string;
    Qtd_moedas: number;
    Imagem: string;
    Planeta: string;
    Status: string;
}

interface RawAchievement {
  id: number;
  Nome: string;
  Descrição: string;
  Tarefas: string | null;
  Qtd_moedas: number;
  Imagem: string;
  Planeta: { id: number; Nome: string };
  Status: { id: number; Nome: string };
}

const mapRawAchievementToAchievements = (raw: RawAchievement): Achievement => ({
  id: raw.id,
  Nome: raw.Nome,
  Descrição: raw.Descrição,
  Tarefas: raw.Tarefas ? raw.Tarefas : undefined,
  Qtd_moedas: raw.Qtd_moedas,
  Imagem: raw.Imagem,
  Planeta: raw.Planeta.Nome,
  Status: raw.Status.Nome
});

export async function fetchAchievement(): Promise<Achievement[]> {
  try {
    const response = await api.get('/conquistas');

    const rawAchievements: RawAchievement[] = response.data.data;
    return rawAchievements.map(mapRawAchievementToAchievements);
  } catch (e) {
    console.error('Erro ao buscar conquistas', e);

    try {
      const rawAchievements: RawAchievement[] = gameData.conquistas.data;
      return rawAchievements.map(mapRawAchievementToAchievements);
    } catch (fallbackError) {
      console.error('Erro no fallback para db.json:', fallbackError);
      throw new Error('Falha ao carregar conquistas. Verifique o JSON Server ou o arquivo db.json.');
    }
    }
  }
