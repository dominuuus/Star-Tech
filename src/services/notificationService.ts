import { api } from "../lib/axios";
import gameData from "../assets/db/db.json";

export interface Notification {
  id: number;
  Descrição: string;
  Data_Criação: string;
  Status: string;
  Usuário?: string;
  Equipe?: string;
  Projeto_nome?: string;
  Projeto_icone?: string;
  Projeto_progresso?: number;
  Tipo: string;
}

interface RawNotification {
  id: number;
  descricao: string;
  data_criacao: string;
  status: { id: number; nome: string };
  usuario: { id: number; nome: string } | null;
  equipe: { id: number; nome: string } | null;
  projeto: {
    id: number;
    nome: string;
    icone: string;
    progresso: number;
  } | null;
  tipo: string;
}

const mapRawNotificationToNotification = (
  raw: RawNotification
): Notification => ({
  id: raw.id,
  Descrição: raw.descricao,
  Data_Criação: raw.data_criacao,
  Status: raw.status.nome,
  Usuário: raw.usuario?.nome ? raw.usuario.nome : undefined,
  Equipe: raw.equipe?.nome ? raw.equipe.nome : undefined,
  Projeto_nome: raw.projeto?.nome ? raw.projeto.nome : undefined,
  Projeto_icone: raw.projeto?.icone ? raw.projeto.icone : undefined,
  Projeto_progresso: raw.projeto?.progresso ? raw.projeto.progresso : undefined,
  Tipo: raw.tipo,
});

export async function fetchNotification(): Promise<Notification[]> {
  try {
    const response = await api.get("/notificacoes");
    const rawNotifications: RawNotification[] = response.data;
    if (!Array.isArray(rawNotifications)) {
      throw new Error("Dados de notificacoes inválidos retornados pela API");
    }
    return rawNotifications.map(mapRawNotificationToNotification);
  } catch (error) {
    console.error("Erro ao buscar notificacoes via API:", error);
    try {
      const rawNotifications: RawNotification[] = gameData.notificacoes;
      if (!Array.isArray(rawNotifications)) {
        throw new Error("Dados de notificacoes inválidos no db.json");
      }
      return rawNotifications.map(mapRawNotificationToNotification);
    } catch (fallbackError) {
      console.error("Erro no fallback para db.json:", fallbackError);
      throw new Error(
        "Falha ao carregar notificacoes. Verifique o JSON Server ou o arquivo db.json."
      );
    }
  }
}
