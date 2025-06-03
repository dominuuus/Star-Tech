import { api } from "../lib/axios";
import gameData from "../assets/db/db.json";

export interface GreenMissionChallenge {
  id: number;
  nome: string;
  descricao?: string;
  status: string;
  progresso?: number;
  recompensa?: number;
  missao_verde_id?: number;
}

interface RawGreenMissionLevel {
  id: number;
  nome: string;
  descricao: string | null;
  status: { id: number; nome: string };
  progresso?: number | null;
  recompensa?: number | null;
  missao_verde_id: number | null;
}

const mapRawGreenMissionChallengeToGreenMissionChallenge = (
  raw: RawGreenMissionLevel
): GreenMissionChallenge => ({
  id: raw.id,
  nome: raw.nome,
  descricao: raw.descricao ? raw.descricao : undefined,
  status: raw.status.nome,
  progresso: raw.progresso ?? undefined,
  recompensa: raw.recompensa ?? undefined,
  missao_verde_id: raw.missao_verde_id ?? undefined,
});

export async function fetchGreenMissionLevel(): Promise<
  GreenMissionChallenge[]
> {
  try {
    const response = await api.get("/desafios_missoes_verdes");
    const rawGreenMissions: RawGreenMissionLevel[] = response.data;
    if (!Array.isArray(rawGreenMissions)) {
      throw new Error("Dados de missoes_verdes inválidos retornados pela API");
    }
    return rawGreenMissions.map(
      mapRawGreenMissionChallengeToGreenMissionChallenge
    );
  } catch (error) {
    console.error("Erro ao buscar missoes_verdes via API:", error);
    try {
      const rawGreenMissions: RawGreenMissionLevel[] =
        gameData.desafios_missoes_verdes;
      if (!Array.isArray(rawGreenMissions)) {
        throw new Error("Dados de missoes_verdes inválidos no db.json");
      }
      return rawGreenMissions.map(
        mapRawGreenMissionChallengeToGreenMissionChallenge
      );
    } catch (fallbackError) {
      console.error("Erro no fallback para db.json:", fallbackError);
      throw new Error(
        "Falha ao carregar missoes_verdes. Verifique o JSON Server ou o arquivo db.json."
      );
    }
  }
}
