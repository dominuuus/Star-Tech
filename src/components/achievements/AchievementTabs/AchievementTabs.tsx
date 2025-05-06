// AchievementTab/AchievementTab.tsx
import { useState } from 'react';
import { TabContainer, TabButton } from './AchievementTabs.styles.ts';

export function AchievementTabs() {
  const [activeTab, setActiveTab] = useState<string>('medalhas');

  return (
    <TabContainer>
      <TabButton active={activeTab === 'medalhas'} onClick={() => setActiveTab('medalhas')}>
        BADGES
      </TabButton>
      <TabButton active={activeTab === 'mapas'} onClick={() => setActiveTab('mapas')}>
        MAPAS
      </TabButton>
      <TabButton active={activeTab === 'mascotes'} onClick={() => setActiveTab('mascotes')}>
        MASCOTES
      </TabButton>
    </TabContainer>
  );  
}
