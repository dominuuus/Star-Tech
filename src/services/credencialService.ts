import { api } from "../lib/axios";
import gameData from "../assets/db/db.json";

export interface Credential {
  id: number;
  Nome: string;
  Descrição?: string;
  Status: string;
  Tipo?: string;
}

interface RawCredential {
  id: number;
  nome: string;
  descricao: string | null;
  status: { id: number; nome: string };
  tipo: { id: number; nome: string } | null;
}

const mapRawCredentialToCredential = (raw: RawCredential): Credential => ({
  id: raw.id,
  Nome: raw.nome,
  Descrição: raw.descricao ? raw.descricao : undefined,
  Status: raw.status.nome,
  Tipo: raw.tipo?.nome ? raw.tipo.nome : undefined,
});

export async function fetchCredential(): Promise<Credential[]> {
  try {
    const response = await api.get("/credenciais");
    const rawCredentials: RawCredential[] = response.data;
    if (!Array.isArray(rawCredentials)) {
      throw new Error("Dados de credenciais inválidos retornados pela API");
    }
    return rawCredentials.map(mapRawCredentialToCredential);
  } catch (error) {
    console.error("Erro ao buscar credenciais via API:", error);
    try {
      const rawCredentials: RawCredential[] = gameData.credenciais;
      if (!Array.isArray(rawCredentials)) {
        throw new Error("Dados de credenciais inválidos no db.json");
      }
      return rawCredentials.map(mapRawCredentialToCredential);
    } catch (fallbackError) {
      console.error("Erro no fallback para db.json:", fallbackError);
      throw new Error(
        "Falha ao carregar credenciais. Verifique o JSON Server ou o arquivo db.json."
      );
    }
  }
}
