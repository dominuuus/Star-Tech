
// src/services/UserMascotService.ts
import { api } from '../lib/axios';

// Interface para o Mascote
export interface Mascot {
  id: number;
  Nome: string;
  Descrição: string;
  Imagem: string;
  Planeta: {
    id: number;
    Nome: string;
    Imagem: string;
  };
  Titulo: string;
  Personalidade: string;
  Habilidade_Especial: string;
  Aparência: string;
  Status: {
    id: number;
    Nome: string;
  };
}

// Interface para o relacionamento Usuário-Mascote
interface UserMascotRelation {
  Usuário_id: number;
  Mascote_id: number;
  Data_Conquista: string;
}

// Interface para combinar Mascote com a Data de Conquista
export interface UserMascot {
  mascote: Mascot;
  dataConquista: string;
}

// Função para buscar os mascotes de um usuário
export async function fetchUserMascots(usuarioId: number): Promise<UserMascot[]> {
  try {
    // Buscar relacionamentos do usuário
    const relationResponse = await api.get(`/usuario_mascote?Usuário_id=${usuarioId}`);
    const relations: UserMascotRelation[] = relationResponse.data;

    if (!Array.isArray(relations) || relations.length === 0) {
      return [];
    }

    // Para cada relacionamento, buscar os dados do mascote
    const mascotsPromises = relations.map(async (relation) => {
      const mascotResponse = await api.get(`/mascotes/${relation.Mascote_id}`);
      const mascote: Mascot = mascotResponse.data;
      return {
        mascote,
        dataConquista: relation.Data_Conquista,
      };
    });

    return Promise.all(mascotsPromises);
  } catch (error) {
    console.error(`Erro ao buscar mascotes do usuário ${usuarioId}:`, error);
    throw new Error('Falha ao carregar mascotes. Tente novamente.');
  }
}
