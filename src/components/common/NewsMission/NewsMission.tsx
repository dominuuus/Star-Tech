import { NewsContainer, NewsContent } from "./NewsMission.styles";
import {
  fetchNotification,
  Notification,
} from "../../../services/notificationService";
import { useQuery } from "@tanstack/react-query";
import { SpinnerGap } from "phosphor-react";

interface NewsMissionProps {
  tipo?: string;
  maxItems?: number;
}

export function NewsMission({ tipo, maxItems }: NewsMissionProps) {

  const { data: notifications, isLoading, isError, error } = useQuery<Notification[], Error>({
    queryKey: ['notificacoes'],
    queryFn: fetchNotification,
  });

  if (isLoading) return <p><SpinnerGap size={32} /></p>;
  if (isError) return <p>Erro: {error?.message || 'Erro ao carregar mascotes'}</p>;


  const filteredNotification = tipo
    ? (notifications ?? []).filter((notification) => notification.Tipo === tipo)
    : (notifications ?? []);

  const displayedNotification = maxItems
    ? filteredNotification.slice(0, maxItems)
    : filteredNotification;

  return (
    <>
      <NewsContainer>
        {displayedNotification.length > 0 ? (
          displayedNotification.map((notification) => (
            <NewsContent key={notification.id}>
              <div>
                <h5>{notification.Projeto_icone}</h5>
                <h5>{notification.Projeto_nome}</h5>
              </div>
              <div>
                <span>{notification.Projeto_progresso}% concluído</span>
              </div>
              {notification.id !==
                displayedNotification[displayedNotification.length - 1].id}
            </NewsContent>
          ))
        ) : (
          <span> Nenhuma notificação encontrada </span>
        )}
      </NewsContainer>
    </>
  );
}
