import { api } from "../lib/axios";
import gameData from "../assets/db/db.json";

export interface Planet {
  id: number;
  Nome: string;
  Descrição?: string;
  Titulo: string;
  Status?: string;
  Qtd_missões?: number;
  Tema_Principal?: string;
  Imagem?: string;
  Gentilico: string;
  Mascote_nome: string[];
  Mascote_imagem: string[];
  Mascote_descricao: string[];
  categoria: string;
  top: number;
  left: number;
}

interface RawPlanet {
  id: number;
  nome: string;
  descricao: string | null;
  titulo: string;
  status: { id: number; nome: string } | null;
  qtd_missoes: number | null;
  tema_principal: { id: number; nome: string } | null;
  imagem: string | null;
  gentilico: string;
  mascotes:
    | { id: number; nome: string; imagem: string; descricao: string }[]
    | null;
  categoria: string;
  top: number;
  left: number;
}

const mapRawPlanetToPlanet = (raw: RawPlanet): Planet => ({
  id: raw.id,
  Nome: raw.nome,
  Descrição: raw.descricao ? raw.descricao : undefined,
  Titulo: raw.titulo,
  Status: raw.status?.nome ? raw.status.nome : undefined,
  Qtd_missões: raw.qtd_missoes ? raw.qtd_missoes : undefined,
  Tema_Principal: raw.tema_principal?.nome
    ? raw.tema_principal.nome
    : undefined,
  Imagem: raw.imagem ? raw.imagem : undefined,
  Gentilico: raw.gentilico,
  Mascote_nome: raw.mascotes ? raw.mascotes.map((mascote) => mascote.nome) : [],
  Mascote_imagem: raw.mascotes
    ? raw.mascotes.map((mascote) => mascote.imagem)
    : [],
  Mascote_descricao: raw.mascotes
    ? raw.mascotes.map((mascote) => mascote.descricao)
    : [],
  categoria: raw.categoria,
  top: raw.top,
  left: raw.left,
});

export async function fetchPlanet(): Promise<Planet[]> {
  try {
    const response = await api.get("/planetas");
    const rawPlanets: RawPlanet[] = response.data;
    if (!Array.isArray(rawPlanets)) {
      throw new Error("Dados de planetas inválidos retornados pela API");
    }
    return rawPlanets.map(mapRawPlanetToPlanet);
  } catch (error) {
    console.error("Erro ao buscar planetas via API:", error);
    try {
      const rawPlanets: RawPlanet[] = gameData.planetas;
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
