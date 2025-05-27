import React from 'react';
import { TabMenuContainer, TabMenuItem } from './TabMenu.styles';

interface TabMenuProps {
  items: { id: number; titulo: string }[];
  activeTab: number;
  onTabChange: (id: number) => void;
}

export const TabMenu: React.FC<TabMenuProps> = ({ items, activeTab, onTabChange }) => {
  return (
    <TabMenuContainer>
      {items.map((item) => (
        <TabMenuItem
          key={item.id}
          active={activeTab === item.id}
          onClick={() => onTabChange(item.id)}
        >
          {item.titulo}
        </TabMenuItem>
      ))}
    </TabMenuContainer>
  );
};