import { useEffect, useState } from "react";
import { NewsContainer, NewsContent } from "./NewsMission.styles";
import {
  fetchNotification, Notification
} from "../../../services/notificationService";

interface NewsMissionProps {
    tipo?: string;
    maxItems?: number;
}

export function NewsMission({tipo, maxItems}: NewsMissionProps) {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    fetchNotification().then(setNotifications).catch(console.error);
  }, []);

  const filteredNotification = tipo
  ? notifications.filter(notification => notification.Tipo === tipo)
  : notifications;

  const displayedNotification = maxItems
  ? filteredNotification.slice(0, maxItems)
  : filteredNotification;

  return (
    <>
      <NewsContainer>
        {
            displayedNotification.length > 0 ? (
                displayedNotification.map(notification => (
                    <NewsContent key={notification.Id}>
          <span>{notification.Descrição}</span>
          {notification.Id !== displayedNotification[displayedNotification.length - 1].Id && <hr />}
        </NewsContent>
                ))
            ) : ( <span> Nenhuma notificação encontrada </span>)
        }
        
      </NewsContainer>
    </>
  );
}
