import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ErrorMessage, MascotCard, MascotDetails, MascotImage, MascotSection, UserPageContainer } from './UserPublicProfile.styles';
import { fetchUserMascots, UserMascot } from '../../services/UserMascotService';

export function UserPage() {
  const { id } = useParams<{ id: string }>(); // Captura o ID da URL
  const usuarioId = parseInt(id || '0', 10);
  const [mascots, setMascots] = useState<UserMascot[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!usuarioId) {
      setError('ID de usuário inválido.');
      return;
    }

    fetchUserMascots(usuarioId)
      .then((data) => {
        setMascots(data);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [usuarioId]);

  return (
    <UserPageContainer>
      <h1>Página do Usuário {usuarioId}</h1>
      <MascotSection>
        <h2>Meus Mascotes</h2>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {mascots.length === 0 && !error && <p>Nenhum mascote conquistado.</p>}
        {mascots.map(({ mascote }) => (
          <MascotCard key={mascote.id}>
            <MascotImage src={mascote.Imagem} alt={mascote.Nome} />
            <MascotDetails>
              <h3>{mascote.Nome} - {mascote.Titulo}</h3>
              <p><strong>Descrição:</strong> {mascote.Descrição}</p>
              <p><strong>Planeta:</strong> {mascote.Planeta.Nome}</p>
              <p><strong>Personalidade:</strong> {mascote.Personalidade}</p>
              <p><strong>Habilidade Especial:</strong> {mascote.Habilidade_Especial}</p>
              <p><strong>Aparência:</strong> {mascote.Aparência}</p>
              <p><strong>Status:</strong> {mascote.Status.Nome}</p>
            </MascotDetails>
          </MascotCard>
        ))}
      </MascotSection>
    </UserPageContainer>
  );
}