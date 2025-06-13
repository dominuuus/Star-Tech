import { api } from "../lib/axios";
import gameData from "../assets/db/db.json";

export interface ShopItem {
  id: number;
  nome: string;
  descricao: string;
  categoria: string | null;
  genero: string | null;
  estelares: number;
  imagem: string;

}

interface RawShopItem {
  id: number;
  nome: string;
  descricao: string;
  categoria: string | null;
  genero: string | null;
  estelares: number;
  imagem: string;
}

const mapRawShopItemToShopItem = (raw: RawShopItem): ShopItem => ({
  id: raw.id,
  nome: raw.nome,
  descricao: raw.descricao,
  categoria: raw.categoria,
  genero: raw.genero,
  estelares: raw.estelares,
  imagem: raw.imagem,
});

export async function fetchShopItem(): Promise<ShopItem[]> {
  try {
    const response = await api.get("/shop");
    const rawUsers: RawShopItem[] = response.data;
    if (!Array.isArray(rawUsers)) {
      throw new Error("Dados do item da loja inválidos retornados pela API");
    }
    return rawUsers.map(mapRawShopItemToShopItem);
  } catch (error) {
    console.error("Erro ao buscar item da loja via API:", error);
    try {
      const rawUsers: RawShopItem[] = gameData.shop;
      if (!Array.isArray(rawUsers)) {
        throw new Error("Dados de item da loja inválidos no db.json");
      }
      return rawUsers.map(mapRawShopItemToShopItem);
    } catch (fallbackError) {
      console.error("Erro no fallback para db.json:", fallbackError);
      throw new Error(
        "Falha ao carregar itens da loja. Verifique o JSON Server ou o arquivo db.json."
      );
    }
  }
}
