import { api } from "../lib/axios";
import gameData from "../assets/db/db.json";

export interface GreenMission {
  id: number;
  nivel: string;
  status: string;
  descricao?: string;
  tipo?: string;
  qtd_desafios?: number;
  qtd_moedas?: number;
  progresso?: number;
  imagem?: string;
}

interface RawGreenMission {
  id: number;
  nivel: string;
  status: { id: number; nome: string };
  descricao: string | null;
  tipo?: string | null;
  qtd_desafios: number | null;
  qtd_moedas?: number | null;
  progresso?: number | null;
  imagem: string | null;

}

const mapRawGreenMissionToGreenMission = (raw: RawGreenMission): GreenMission => ({
    id: raw.id,
    nivel: raw.nivel,
    descricao: raw.descricao ? raw.descricao : undefined,
    status: raw.status.nome,
    tipo: raw.tipo ? raw.tipo : undefined,
    qtd_desafios: raw.qtd_desafios ?? undefined,
    qtd_moedas: raw.qtd_moedas ?? undefined,
    progresso: raw.progresso ?? undefined,
    imagem: raw.imagem ? raw.imagem : undefined
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
