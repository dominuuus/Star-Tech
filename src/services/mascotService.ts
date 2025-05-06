import { api } from "../lib/axios";
import gameData from "../assets/db/db.json";

export interface Mascot {
  id: number;
  Nome: string;
  Descrição: string;
  Imagem: string;
  Planeta?: string;
  Titulo: string;
  Personalidade: string;
  Habilidade_Especial: string;
  Aparência: string;
}

interface RawMascot {
  id: number;
  Nome: string;
  Descrição: string;
  Imagem: string;
  Planeta: { id: number; Nome: string } | null;
  Titulo: string;
  Personalidade: string;
  Habilidade_Especial: string;
  Aparência: string;
}

const mapRawMascotToMascot = (raw: RawMascot): Mascot => ({
  id: raw.id,
  Nome: raw.Nome,
  Descrição: raw.Descrição,
  Imagem: raw.Imagem,
  Planeta: raw.Planeta ? raw.Planeta?.Nome : undefined,
  Titulo: raw.Titulo,
  Personalidade: raw.Personalidade,
  Habilidade_Especial: raw.Habilidade_Especial,
  Aparência: raw.Aparência,
});

export async function fetchMascot(): Promise<Mascot[]> {
  try {
    const response = await api.get("/mascotes");
    const rawMascots: RawMascot[] = response.data.data;
    if (!Array.isArray(rawMascots)) {
      throw new Error("Dados de mascotes inválidos retornados pela API");
    }
    return rawMascots.map(mapRawMascotToMascot);
  } catch (error) {
    console.error("Erro ao buscar mascotes via API:", error);
    try {
      const rawMascots: RawMascot[] = gameData.mascotes.data;
      if (!Array.isArray(rawMascots)) {
        throw new Error("Dados de mascotes inválidos no db.json");
      }
      return rawMascots.map(mapRawMascotToMascot);
    } catch (fallbackError) {
      console.error("Erro no fallback para db.json:", fallbackError);
      throw new Error(
        "Falha ao carregar mascotes. Verifique o JSON Server ou o arquivo db.json."
      );
    }
  }
}
