import React from 'react';
import { SecondaryTabContainer, SecondaryTabItem } from './SecondaryTab.styles';

interface SecondaryTabProps {
  headings: { id: string; text: string }[];
  activeHeading: string;
  onHeadingClick: (id: string) => void;
}

export const SecondaryTab: React.FC<SecondaryTabProps> = ({ 
  headings, 
  activeHeading, 
  onHeadingClick 
}) => {
  return (
    <SecondaryTabContainer>
      <h3>Nesta página</h3>
      {headings.map((heading) => (
        <SecondaryTabItem
          key={heading.id}
          active={activeHeading === heading.id}
          onClick={() => onHeadingClick(heading.id)}
        >
          {heading.text}
        </SecondaryTabItem>
      ))}
    </SecondaryTabContainer>
  );
};