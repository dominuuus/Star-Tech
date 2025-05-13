import { api } from "../lib/axios";
import gameData from "../assets/db/db.json";

export interface GreenMission {
  id: number;
  Nome: string;
  Descrição?: string;
  Status: string;
  Qtd_moedas?: number;
  Nível?: string;
}

interface RawGreenMission {
  id: number;
  Nome: string;
  Descrição: string | null;
  Status: {id: number, Nome: string};
  Qtd_moedas: number | null;
  Nível: {id: number, Nome: string} | null;
}

const mapRawGreenMissionToGreenMission = (raw: RawGreenMission): GreenMission => ({
    id: raw.id,
    Nome: raw.Nome,
    Descrição: raw.Descrição ? raw.Descrição : undefined,
    Status: raw.Status.Nome,
    Qtd_moedas: raw.Qtd_moedas ? raw.Qtd_moedas : undefined,
    Nível: raw.Nível?.Nome ? raw.Nível.Nome : undefined,
});

export async function fetchGreenMission(): Promise<GreenMission[]> {
  try {
    const response = await api.get("/missoes_verdes");
    const rawGreenMissions: RawGreenMission[] = response.data;
    if (!Array.isArray(rawGreenMissions)) {
      throw new Error("Dados de missoes_verdes inválidos retornados pela API");
    }
    return rawGreenMissions.map(mapRawGreenMissionToGreenMission);
  } catch (error) {
    console.error("Erro ao buscar missoes_verdes via API:", error);
    try {
      const rawGreenMissions: RawGreenMission[] = gameData.missoes_verdes;
      if (!Array.isArray(rawGreenMissions)) {
        throw new Error("Dados de missoes_verdes inválidos no db.json");
      }
      return rawGreenMissions.map(mapRawGreenMissionToGreenMission);
    } catch (fallbackError) {
      console.error("Erro no fallback para db.json:", fallbackError);
      throw new Error(
        "Falha ao carregar missoes_verdes. Verifique o JSON Server ou o arquivo db.json."
      );
    }
  }
}
