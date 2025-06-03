import gameData from "../assets/db/db.json";
import { api } from "../lib/axios";

export interface Achievement {
  id: number;
  Nome: string;
  Descrição?: string;
  Tarefas?: string;
  Qtd_moedas: number;
  Imagem: string;
  Planeta: string;
  Planeta_Imagem?: string;
  Status: string;
}

interface RawAchievement {
  id: number;
  nome: string;
  descricao: string | null;
  tarefas: string | null;
  qtd_moedas: number;
  imagem: string;
  planeta: { id: number; nome: string; imagem: string };
  status: { id: number; nome: string };
}

const mapRawAchievementToAchievements = (raw: RawAchievement): Achievement => ({
  id: raw.id,
  Nome: raw.nome,
  Descrição: raw.descricao ? raw.descricao : undefined,
  Tarefas: raw.tarefas ? raw.tarefas : undefined,
  Qtd_moedas: raw.qtd_moedas,
  Imagem: raw.imagem,
  Planeta: raw.planeta.nome,
  Planeta_Imagem: raw.planeta.imagem,
  Status: raw.status.nome,
});

export async function fetchAchievement(): Promise<Achievement[]> {
  try {
    const response = await api.get("/conquistas");

    const rawAchievements: RawAchievement[] = response.data;
    return rawAchievements.map(mapRawAchievementToAchievements);
  } catch (e) {
    console.error("Erro ao buscar conquistas", e);

    try {
      const rawAchievements: RawAchievement[] = gameData.conquistas;
      return rawAchievements.map(mapRawAchievementToAchievements);
    } catch (fallbackError) {
      console.error("Erro no fallback para db.json:", fallbackError);
      throw new Error(
        "Falha ao carregar conquistas. Verifique o JSON Server ou o arquivo db.json."
      );
    }
  }
}
