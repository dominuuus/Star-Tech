import { isValid, parseISO } from "date-fns";

export function getRelativeDate(dateString: string | Date | null | undefined): string | undefined {
  if (!dateString) return undefined;
  const date = typeof dateString === 'string' ? parseISO(dateString) : dateString;
  if (!isValid(date)) {
    console.warn('Data inválida:', dateString);
    return undefined;
  }
  const diffDays = Math.ceil((date.getTime() - Date.now()) / (1000 * 60 * 60 * 24));
  if (diffDays > 0) return `Vence em ${diffDays} dia${diffDays > 1 ? 's' : ''}`;
  if (diffDays < 0) return `Atrasada ${Math.abs(diffDays)} dia${Math.abs(diffDays) > 1 ? 's' : ''}`;
  return 'Vence hoje';
}

export function formatDate(dateString: string | Date | null | undefined): string | undefined {
  try {
    if (!dateString) {
      return undefined;
    }
    const date = typeof dateString === 'string' ? new Date(dateString) : dateString;
    if (!isValid(date)) {
      console.warn('Data inválida fornecida para formatDate:', dateString);
      return undefined;
    }
    return date.toLocaleString('pt-BR', {
      timeZone: 'UTC',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    }).replace(',', '');
  } catch (error) {
    console.warn('Erro ao processar data em formatDate:', error);
    return undefined;
  }
}