import { api } from "../lib/axios";
import gameData from "../assets/db/db.json";

export interface Spaceship {
    id: number;
    Nome: string;
    Descrição?: string;
    Status?: string;
    Planeta_Origem?: string;
    Planeta_Destino?: string;
    Progresso_Trajeto: number;
    Imagem?: string;
}

interface RawSpaceship {
  id: number;
  Nome: string;
  Descrição: string | null;
  Status: {id: number, Nome: string} | null;
  Planeta_Origem?: {id: number, Nome: string} | null;
  Planeta_Destino?: {id: number, Nome: string} | null;
  Progresso_Trajeto: number;
  Imagem: string | null;
}

const mapRawSquadToSquad = (raw: RawSpaceship): Spaceship => ({
    id: raw.id,
    Nome: raw.Nome,
    Descrição: raw.Descrição ? raw.Descrição : undefined,
    Status: raw.Status?.Nome ? raw.Status.Nome : undefined,
    Planeta_Origem: raw.Planeta_Origem?.Nome ? raw.Planeta_Origem.Nome : undefined,
    Planeta_Destino: raw.Planeta_Destino?.Nome ? raw.Planeta_Destino.Nome : undefined,
    Progresso_Trajeto: raw.Progresso_Trajeto,
    Imagem: raw.Imagem ? raw.Imagem : undefined,
});


export async function fetchSpaceship(): Promise<Spaceship[]> {
  try {
    const response = await api.get("/naves");
    const rawSpaceship: RawSpaceship[] = response.data.data;
    if (!Array.isArray(rawSpaceship)) {
      throw new Error("Dados de naves inválidos retornados pela API");
    }
    return rawSpaceship.map(mapRawSquadToSquad);
  } catch (error) {
    console.error("Erro ao buscar naves via API:", error);
    try {
      const rawSpaceship: RawSpaceship[] = gameData.naves.data;
      if (!Array.isArray(rawSpaceship)) {
        throw new Error("Dados de naves inválidos no db.json");
      }
      return rawSpaceship.map(mapRawSquadToSquad);
    } catch (fallbackError) {
      console.error("Erro no fallback para db.json:", fallbackError);
      throw new Error(
        "Falha ao carregar naves. Verifique o JSON Server ou o arquivo db.json."
      );
    }
  }
}
