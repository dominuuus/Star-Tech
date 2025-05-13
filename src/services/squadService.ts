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
  Nome: string;
  Descrição: string | null;
  Nave: { id: number; Nome: string; Imagem: string } | null;
  Status: { id: number; Nome: string } | null;
  Tripulação:
    | {
        id: number;
        Nome: string;
        Cargo: string;
        Imagem: string;
        Username: string;
        Descrição: string;
        Mascotes_preferidos: { id: number; Nome: string; Imagem: string }[];
      }[]
    | null;
  Missões_Abertas:
    | {
        id: number;
        Nome: string;
        Progresso: number;
        Status: { id: number; Nome: string };
        Posição: {
          id: number;
          Posição1?: number;
          Posição2?: number;
          Posição3?: number;
        };
      }[]
    | null;
  Planetas_Explorados:
    | {
        id: number;
        Nome: string;
        Imagem: string;
        Descrição: string;
        Mascotes: {
          id: number;
          Nome: string;
          Imagem: string;
          Descrição: string;
        }[];
      }[]
    | null;
}

const mapRawSquadToSquad = (raw: RawSquad): Squad => ({
  id: raw.id,
  Nome: raw.Nome,
  Descrição: raw.Descrição ? raw.Descrição : undefined,
  Nave_Nome: raw.Nave?.Nome ? raw.Nave.Nome : undefined,
  Nave_Imagem: raw.Nave?.Imagem ? raw.Nave.Imagem : undefined,
  Status: raw.Status?.Nome ? raw.Status.Nome : undefined,
  Tripulação_User_nome: raw.Tripulação
    ? raw.Tripulação.map((user) => user.Nome)
    : undefined,
  Tripulação_User_id: raw.Tripulação
    ? raw.Tripulação.map((user) => user.id)
    : undefined,
  Tripulação_User_cargo: raw.Tripulação
    ? raw.Tripulação.map((user) => user.Cargo)
    : undefined,
  Tripulação_User_username: raw.Tripulação
    ? raw.Tripulação.map((user) => user.Username)
    : undefined,
  Tripulação_User_descrição: raw.Tripulação
    ? raw.Tripulação.map((user) => user.Descrição)
    : undefined,
  Tripulação_User_imagem: raw.Tripulação
    ? raw.Tripulação.map((user) => user.Imagem)
    : undefined,
    Tripulação_User_Mascote_Nome: raw.Tripulação
    ? raw.Tripulação.map(user => user.Mascotes_preferidos.map(mascote => mascote.Nome)) : undefined,
  Tripulação_User_Mascote_Imagem: raw.Tripulação
    ? raw.Tripulação.map(user => user.Mascotes_preferidos.map(mascote => mascote.Imagem)) : undefined,
  Tripulação_Missao_id: raw.Missões_Abertas
    ? raw.Missões_Abertas.map((missao) => missao.id)
    : undefined,
  Tripulação_Missao_nome: raw.Missões_Abertas
    ? raw.Missões_Abertas.map((missao) => missao.Nome)
    : undefined,
  Tripulação_Missao_progresso: raw.Missões_Abertas
    ? raw.Missões_Abertas.map((missao) => missao.Progresso)
    : undefined,
  Tripulação_Missao_status: raw.Missões_Abertas
    ? raw.Missões_Abertas.map((missao) => missao.Status.Nome)
    : undefined,
  Tripulacao_Missao_Position1: raw.Missões_Abertas
    ? raw.Missões_Abertas.map((missao) => missao.Posição.Posição1 ?? 0)
    : undefined,
  Tripulacao_Missao_Position2: raw.Missões_Abertas
    ? raw.Missões_Abertas.map((missao) => missao.Posição.Posição2 ?? 0)
    : undefined,
  Tripulacao_Missao_Position3: raw.Missões_Abertas
    ? raw.Missões_Abertas.map((missao) => missao.Posição.Posição3 ?? 0)
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
