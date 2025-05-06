import { api } from "../lib/axios";
import gameData from "../assets/db/db.json";

export interface Squad {
  id: number;
  Nome: string;
  Descrição?: string;
  Nave_Imagem?: string;
  Status?: string;
}

interface RawSquad {
  id: number;
  Nome: string;
  Descrição: string | null;
  Nave: {id: number, Nome: string, Imagem: string} | null;
  Status: {id: number, Nome: string} | null;
}

const mapRawSquadToSquad = (raw: RawSquad): Squad => ({
    id: raw.id,
    Nome: raw.Nome,
    Descrição: raw.Descrição ? raw.Descrição : undefined,
    Nave_Imagem: raw.Nave?.Imagem ? raw.Nave.Imagem : undefined,
    Status: raw.Status?.Nome ? raw.Status.Nome : undefined,
});


export async function fetchSquad(): Promise<Squad[]> {
   try {
      const response = await api.get("/equipes");
      const rawSquads: RawSquad[] = response.data.data;
      if (!Array.isArray(rawSquads)) {
        throw new Error("Dados de equipes inválidos retornados pela API");
      }
      return rawSquads.map(mapRawSquadToSquad);
    } catch (error) {
      console.error("Erro ao buscar equipes via API:", error);
      try {
        const rawSquads: RawSquad[] = gameData.equipes.data;
        if (!Array.isArray(rawSquads)) {
          throw new Error("Dados de equipes inválidos no db.json");
        }
        return rawSquads.map(mapRawSquadToSquad);
      } catch (fallbackError) {
        console.error("Erro no fallback para db.json:", fallbackError);
        throw new Error(
          "Falha ao carregar equipes. Verifique o JSON Server ou o arquivo db.json."
        );
      }
    }
}
