import { useState } from 'react';
import { Header } from "../../components/common/Header/Header";
import { DocummentationContainer, DocummentationContent, DocumentationLayout } from "./Docummentation.styles";
import { TabMenu } from './components/TabMenu';
import { ContentDetails } from './components/ContentDetails';
import documentationData from './components/documentation.json';


export function Docummentation() {
  const [activeTab, setActiveTab] = useState(1);

  const activeContent = documentationData.documentacao.find(
    (item) => item.id === activeTab
  )?.conteudo || '';

  return (
    <DocummentationContainer>
      <Header />
      <DocumentationLayout>
        <TabMenu
          items={documentationData.documentacao.map(({ id, titulo }) => ({ id, titulo }))}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
        <DocummentationContent>
          <ContentDetails content={activeContent} />
        </DocummentationContent>
      </DocumentationLayout>
    </DocummentationContainer>
  );
}
