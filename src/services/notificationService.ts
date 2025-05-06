import { api } from "../lib/axios";
import gameData from "../assets/db/db.json";

export interface Notification {
  id: number;
  Descrição: string;
  Data_Criação: string;
  Status: string;
  Usuário?: string;
  Equipe?: string;
  Projeto?: string;
  Tipo: string;
}

interface RawNotification {
  id: number;
  Descrição: string;
  Data_Criação: string;
  Status: { id: number; Nome: string };
  Usuário: { id: number; Nome: string } | null;
  Equipe: { id: number; Nome: string } | null;
  Projeto: { id: number; Nome: string } | null;
  Tipo: string;
}

const mapRawNotificationToNotification = (
  raw: RawNotification
): Notification => ({
  id: raw.id,
  Descrição: raw.Descrição,
  Data_Criação: raw.Data_Criação,
  Status: raw.Status.Nome,
  Usuário: raw.Usuário?.Nome ? raw.Usuário.Nome : undefined,
  Equipe: raw.Equipe?.Nome ? raw.Equipe.Nome : undefined,
  Projeto: raw.Projeto?.Nome ? raw.Projeto.Nome : undefined,
  Tipo: raw.Tipo,
});

export async function fetchNotification(): Promise<Notification[]> {
  try {
    const response = await api.get("/notificacoes");
    const rawNotifications: RawNotification[] = response.data.data;
    if (!Array.isArray(rawNotifications)) {
      throw new Error("Dados de notificacoes inválidos retornados pela API");
    }
    return rawNotifications.map(mapRawNotificationToNotification);
  } catch (error) {
    console.error("Erro ao buscar notificacoes via API:", error);
    try {
      const rawNotifications: RawNotification[] = gameData.notificacoes.data;
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
