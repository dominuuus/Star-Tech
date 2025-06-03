import { api } from "../lib/axios";
import gameData from "../assets/db/db.json";

export interface Mascot {
  id: number;
  Nome: string;
  Descrição: string;
  Imagem: string;
  Planeta?: string;
  Planeta_Imagem?: string;
  Titulo: string;
  Personalidade: string;
  Habilidade_Especial: string;
  Aparência: string;
  Status?: string;
}

interface RawMascot {
  id: number;
  nome: string;
  descricao: string;
  imagem: string;
  planeta: { id: number; nome: string; imagem: string } | null;
  titulo: string;
  personalidade: string;
  habilidade_especial: string;
  aparencia: string;
  status: { id: number; nome: string } | null;
}

const mapRawMascotToMascot = (raw: RawMascot): Mascot => ({
  id: raw.id,
  Nome: raw.nome,
  Descrição: raw.descricao,
  Imagem: raw.imagem,
  Planeta: raw.planeta ? raw.planeta?.nome : undefined,
  Planeta_Imagem: raw.planeta ? raw.planeta?.imagem : undefined,
  Titulo: raw.titulo,
  Personalidade: raw.personalidade,
  Habilidade_Especial: raw.habilidade_especial,
  Aparência: raw.aparencia,
  Status: raw.status ? raw.status?.nome : undefined,
});

export async function fetchMascot(): Promise<Mascot[]> {
  try {
    const response = await api.get("/mascotes");
    const rawMascots: RawMascot[] = response.data;
    if (!Array.isArray(rawMascots)) {
      throw new Error("Dados de mascotes inválidos retornados pela API");
    }
    return rawMascots.map(mapRawMascotToMascot);
  } catch (error) {
    console.error("Erro ao buscar mascotes via API:", error);
    try {
      const rawMascots: RawMascot[] = gameData.mascotes;
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
