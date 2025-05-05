import { format, isValid, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";


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
    const date = typeof dateString === 'string' ? parseISO(dateString) : dateString;
    if (!isValid(date)) {
      console.warn('Data inválida fornecida para formatDate:', dateString);
      return undefined;
    }
    return format(date, 'dd/MM/yyyy HH:mm', { locale: ptBR });
  } catch (error) {
    console.warn('Erro ao processar data em formatDate:', error);
    return undefined;
  }
}