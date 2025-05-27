import { api } from "../lib/axios";
import gameData from "../assets/db/db.json";

export interface Spaceship {
    id: number;
    nome: string;
    descricao?: string;
    status?: string;
    planeta_origem?: string;
    planeta_destino?: string;
    progresso_trajeto: number;
    imagem?: string;
    estatico?: string;
    top: number;
    left: number;
}

interface RawSpaceship {
  id: number;
  nome: string;
  descricao: string | null;
  status: {id: number, nome: string} | null;
  planeta_origem?: {id: number, nome: string} | null;
  planeta_destino?: {id: number, nome: string} | null;
  progresso_trajeto: number;
  imagem: string | null;
  estatico: string | null;
  top: number;
  left: number;
}

const mapRawSquadToSquad = (raw: RawSpaceship): Spaceship => ({
    id: raw.id,
    nome: raw.nome,
    descricao: raw.descricao ? raw.descricao : undefined,
    status: raw.status?.nome ? raw.status.nome : undefined,
    planeta_origem: raw.planeta_origem?.nome ? raw.planeta_origem.nome : undefined,
    planeta_destino: raw.planeta_destino?.nome ? raw.planeta_destino.nome : undefined,
    progresso_trajeto: raw.progresso_trajeto,
    imagem: raw.imagem ? raw.imagem : undefined,
    estatico: raw.estatico ? raw.estatico : undefined,
    top: raw.top,
    left: raw.left,
});


export async function fetchSpaceship(): Promise<Spaceship[]> {
  try {
    const response = await api.get("/naves");
    const rawSpaceship: RawSpaceship[] = response.data;
    if (!Array.isArray(rawSpaceship)) {
      throw new Error("Dados de naves inválidos retornados pela API");
    }
    return rawSpaceship.map(mapRawSquadToSquad);
  } catch (error) {
    console.error("Erro ao buscar naves via API:", error);
    try {
      const rawSpaceship: RawSpaceship[] = gameData.naves;
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
