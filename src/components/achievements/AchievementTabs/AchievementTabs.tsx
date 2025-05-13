// AchievementTabs.tsx
import { TabContainer, TabButton } from './AchievementTabs.styles';

interface AchievementTabsProps {
  activeTab: 'badges' | 'mapas' | 'mascotes';
  setActiveTab: (tab: 'badges' | 'mapas' | 'mascotes') => void;
}

export function AchievementTabs({ activeTab, setActiveTab }: AchievementTabsProps) {
  return (
    <TabContainer>
      <TabButton 
        active={activeTab === 'badges'} 
        onClick={() => setActiveTab('badges')}
      >
        BADGES
      </TabButton>
      <TabButton 
        active={activeTab === 'mapas'} 
        onClick={() => setActiveTab('mapas')}
      >
        MAPAS
      </TabButton>
      <TabButton 
        active={activeTab === 'mascotes'} 
        onClick={() => setActiveTab('mascotes')}
      >
        MASCOTES
      </TabButton>
    </TabContainer>
  );
}
