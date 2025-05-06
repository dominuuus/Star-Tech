import { api } from "../lib/axios";
import gameData from "../assets/db/db.json";

export interface User {
  id: number;
  Nome: string;
  Email: string;
  Foto: string | null;
  Descrição: string;
  Estelares: number;
  Nível: number;
  Avatar_Imagem: string | null;
  Equipe_Nome: string | null;
  Cargo: string;
}

interface RawUser {
  id: number;
  Nome: string;
  Email_Mascado: string;
  Foto: string | null;
  Descrição: string;
  Estelares: number;
  Nível: number;
  Avatar: {
    id: number;
    Nome: string;
    Imagem: string | null;
    Tipo: { id: number; Nome: string } | null;
  } | null;
  Equipe: {
    id: number;
    Nome: string;
    Status: { id: number; Nome: string };
  } | null;
  Cargo: string;
}

const mapRawUserToUser = (raw: RawUser): User => ({
  id: raw.id,
  Nome: raw.Nome,
  Email: raw.Email_Mascado,
  Foto: raw.Foto,
  Descrição: raw.Descrição,
  Estelares: raw.Estelares,
  Nível: raw.Nível,
  Avatar_Imagem: raw.Avatar ? raw.Avatar.Imagem : null,
  Equipe_Nome: raw.Equipe ? raw.Equipe.Nome : null,
  Cargo: raw.Cargo,
});


export async function fetchUser(): Promise<User[]> {
  try {
    const response = await api.get('/usuarios');
    const rawUsers: RawUser[] = response.data.data;
    if (!Array.isArray(rawUsers)) {
      throw new Error('Dados de usuários inválidos retornados pela API');
    }
    return rawUsers.map(mapRawUserToUser);
  } catch (error) {
    console.error('Erro ao buscar usuários via API:', error);
    try {
      const rawUsers: RawUser[] = gameData.usuarios.data;
      if (!Array.isArray(rawUsers)) {
        throw new Error('Dados de usuários inválidos no db.json');
      }
      return rawUsers.map(mapRawUserToUser);
    } catch (fallbackError) {
      console.error('Erro no fallback para db.json:', fallbackError);
      throw new Error('Falha ao carregar usuários. Verifique o JSON Server ou o arquivo db.json.');
    }
  }
}