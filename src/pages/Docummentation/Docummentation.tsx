import { useState, useEffect } from 'react';
import { DocummentationContainer, DocummentationContent, DocumentationLayout, SecondaryTabContainerNav } from "./Docummentation.styles";
import { TabMenu } from './components/TabMenu';
import { ContentDetails } from './components/ContentDetails';
import { SecondaryTab } from './components/SecondaryTab'; // Novo import
import documentationData from './components/documentation.json';

export function Docummentation() {
  const [activeTab, setActiveTab] = useState(1);
  const [headings, setHeadings] = useState<{ id: string; text: string }[]>([]);
  const [activeHeading, setActiveHeading] = useState('');

  useEffect(() => {
    const activeContent = documentationData.documentacao.find(
      (item) => item.id === activeTab
    )?.conteudo || '';

    const headingMatches = activeContent.match(/### (.*?)\n/g) || [];
    const extractedHeadings = headingMatches.map((match, index) => ({
      id: `heading-${index}`,
      text: match.replace('### ', '').trim(),
    }));

    setHeadings(extractedHeadings);
    if (extractedHeadings.length > 0) {
      setActiveHeading(extractedHeadings[0].id);
    }
  }, [activeTab]);

  return (
    <DocummentationContainer>
      <DocumentationLayout>
        <TabMenu
          items={documentationData.documentacao.map(({ id, titulo }) => ({ id, titulo }))}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
        <DocummentationContent>
          <ContentDetails content={
            documentationData.documentacao.find((item) => item.id === activeTab)?.conteudo || ''
          } />
        </DocummentationContent>
        
        <SecondaryTabContainerNav>
          {headings.length > 0 && (
            <SecondaryTab
              headings={headings}
              activeHeading={activeHeading}
              onHeadingClick={setActiveHeading}
            />
          )}
        </SecondaryTabContainerNav>
      </DocumentationLayout>
    </DocummentationContainer>
  );
}