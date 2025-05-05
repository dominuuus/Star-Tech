import { api } from "../lib/axios";
import gameData from "../assets/db/db.json";

export interface Planet {
    Id: number;
    Nome: string;
    Descrição?: string;
    Status?: string;
    Qtd_missões?: number;
    Tema_Principal?: string;
    Imagem?: string;
}

interface RawPlanet {
  Id: number;
  Nome: string;
  Descrição: string | null;
  Status: {Id: number, Nome: string} | null;
  Qtd_missões: number | null;
  Tema_Principal: {Id: number, Nome: string} | null;
  Imagem: string | null;
}

const mapRawPlanetToPlanet = (raw: RawPlanet): Planet => ({
    Id: raw.Id,
    Nome: raw.Nome,
    Descrição: raw.Descrição ? raw.Descrição : undefined,
    Status: raw.Status?.Nome ? raw.Status.Nome : undefined,
    Qtd_missões: raw.Qtd_missões ? raw.Qtd_missões : undefined,
    Tema_Principal: raw.Tema_Principal?.Nome ? raw.Tema_Principal.Nome : undefined,
    Imagem: raw.Imagem ? raw.Imagem : undefined,
});

export async function fetchPlanet(): Promise<Planet[]> {
  try {
    const response = await api.get("/planetas");
    const rawPlanets: RawPlanet[] = response.data.data;
    if (!Array.isArray(rawPlanets)) {
      throw new Error("Dados de planetas inválidos retornados pela API");
    }
    return rawPlanets.map(mapRawPlanetToPlanet);
  } catch (error) {
    console.error("Erro ao buscar planetas via API:", error);
    try {
      const rawPlanets: RawPlanet[] = gameData.planetas.data;
      if (!Array.isArray(rawPlanets)) {
        throw new Error("Dados de planetas inválidos no db.json");
      }
      return rawPlanets.map(mapRawPlanetToPlanet);
    } catch (fallbackError) {
      console.error("Erro no fallback para db.json:", fallbackError);
      throw new Error(
        "Falha ao carregar planetas. Verifique o JSON Server ou o arquivo db.json."
      );
    }
  }
}
