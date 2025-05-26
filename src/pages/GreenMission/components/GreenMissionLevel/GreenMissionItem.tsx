import { CheckCircle, LockSimple, LockSimpleOpen } from 'phosphor-react';
import { PhotoSquareLevelBlack, PhotosquareLevelGray } from './GreenMissionLevel.styles';
import { GreenMission } from '../../../../services/greenMissionService';

interface MissionItemProps {
  mission: GreenMission;
}

export function MissionItem({ mission }: MissionItemProps) {
  const { tipo, status, nivel, imagem } = mission;
  const isCommon = (tipo?.toLowerCase() ?? '') === 'comum';
  const statusName = status.toLowerCase();

  const BackgroundComponent = isCommon ? PhotosquareLevelGray : PhotoSquareLevelBlack;

  const renderContent = () => {
    if (!isCommon) {
      return <img src={imagem} alt={nivel} />;
    }

    switch (statusName) {
      case 'concluído':
        return <CheckCircle size={20} weight="fill" />;
      case 'desbloqueado':
        return <LockSimpleOpen size={20} />;
      case 'bloqueado':
        return <LockSimple size={20} />;
      default:
        return null;
    }
  };

  return (
    <BackgroundComponent>
      {renderContent()}
      <span>{nivel}</span>
    </BackgroundComponent>
  );
}