import { api } from "../lib/axios";
import gameData from "../assets/db/db.json";

export interface Squad {
  id: number;
  Nome: string;
  Descrição?: string;
  Nave_Nome?: string;
  Nave_Imagem?: string;
  Status?: string;
  Tripulação_User_nome?: string[];
  Tripulação_User_id?: number[];
  Tripulação_User_cargo?: string[];
  Tripulação_User_username?: string[];
  Tripulação_User_descrição?: string[];
  Tripulação_User_imagem?: string[];
  Tripulação_User_Mascote_Nome?: string[][];
  Tripulação_User_Mascote_Imagem?: string[][];
  Tripulação_Missao_id?: number[];
  Tripulação_Missao_nome?: string[];
  Tripulação_Missao_progresso?: number[];
  Tripulação_Missao_status?: string[];
  Tripulacao_Missao_Position1?: number[];
  Tripulacao_Missao_Position2?: number[];
  Tripulacao_Missao_Position3?: number[];
}

interface RawSquad {
  id: number;
  nome: string;
  descricao: string | null;
  nave: { id: number; nome: string; imagem: string } | null;
  status: { id: number; nome: string } | null;
  tripulacao:
    | {
        id: number;
        nome: string;
        cargo: string;
        imagem: string;
        username: string;
        descricao: string;
        mascotes_preferidos: { id: number; nome: string; imagem: string }[];
      }[]
    | null;
  missoes_abertas:
    | {
        id: number;
        nome: string;
        progresso: number;
        status: { id: number; nome: string };
        posicao: {
          id: number;
          posicao1?: number;
          posicao2?: number;
          posicao3?: number;
        };
      }[]
    | null;
  planetas_explorados:
    | {
        id: number;
        nome: string;
        imagem: string;
        descricao: string;
        mascotes: {
          id: number;
          nome: string;
          imagem: string;
          descricao: string;
        }[];
      }[]
    | null;
}

const mapRawSquadToSquad = (raw: RawSquad): Squad => ({
  id: raw.id,
  Nome: raw.nome,
  Descrição: raw.descricao ? raw.descricao : undefined,
  Nave_Nome: raw.nave?.nome ? raw.nave.nome : undefined,
  Nave_Imagem: raw.nave?.imagem ? raw.nave.imagem : undefined,
  Status: raw.status?.nome ? raw.status.nome : undefined,
  Tripulação_User_nome: raw.tripulacao
    ? raw.tripulacao.map((user) => user.nome)
    : undefined,
  Tripulação_User_id: raw.tripulacao
    ? raw.tripulacao.map((user) => user.id)
    : undefined,
  Tripulação_User_cargo: raw.tripulacao
    ? raw.tripulacao.map((user) => user.cargo)
    : undefined,
  Tripulação_User_username: raw.tripulacao
    ? raw.tripulacao.map((user) => user.username)
    : undefined,
  Tripulação_User_descrição: raw.tripulacao
    ? raw.tripulacao.map((user) => user.descricao)
    : undefined,
  Tripulação_User_imagem: raw.tripulacao
    ? raw.tripulacao.map((user) => user.imagem)
    : undefined,
  Tripulação_User_Mascote_Nome: raw.tripulacao
    ? raw.tripulacao.map((user) =>
        user.mascotes_preferidos.map((mascote) => mascote.nome)
      )
    : undefined,
  Tripulação_User_Mascote_Imagem: raw.tripulacao
    ? raw.tripulacao.map((user) =>
        user.mascotes_preferidos.map((mascote) => mascote.imagem)
      )
    : undefined,
  Tripulação_Missao_id: raw.missoes_abertas
    ? raw.missoes_abertas.map((missao) => missao.id)
    : undefined,
  Tripulação_Missao_nome: raw.missoes_abertas
    ? raw.missoes_abertas.map((missao) => missao.nome)
    : undefined,
  Tripulação_Missao_progresso: raw.missoes_abertas
    ? raw.missoes_abertas.map((missao) => missao.progresso)
    : undefined,
  Tripulação_Missao_status: raw.missoes_abertas
    ? raw.missoes_abertas.map((missao) => missao.status.nome)
    : undefined,
  Tripulacao_Missao_Position1: raw.missoes_abertas
    ? raw.missoes_abertas.map((missao) => missao.posicao.posicao1 ?? 0)
    : undefined,
  Tripulacao_Missao_Position2: raw.missoes_abertas
    ? raw.missoes_abertas.map((missao) => missao.posicao.posicao2 ?? 0)
    : undefined,
  Tripulacao_Missao_Position3: raw.missoes_abertas
    ? raw.missoes_abertas.map((missao) => missao.posicao.posicao3 ?? 0)
    : undefined,
});

export async function fetchSquad(): Promise<Squad[]> {
  try {
    const response = await api.get("/equipes");
    const rawSquads: RawSquad[] = response.data;
    if (!Array.isArray(rawSquads)) {
      throw new Error("Dados de equipes inválidos retornados pela API");
    }
    return rawSquads.map(mapRawSquadToSquad);
  } catch (error) {
    console.error("Erro ao buscar equipes via API:", error);
    try {
      const rawSquads: RawSquad[] = gameData.equipes;
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
