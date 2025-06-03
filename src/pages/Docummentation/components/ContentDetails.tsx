import React from "react";
import { ContentContainer } from "./ContentDetails.styles";
import ReactMarkdown from "react-markdown";

interface ContentDetailsProps {
  content: string;
}

export const ContentDetails: React.FC<ContentDetailsProps> = ({ content }) => {
  return (
    <ContentContainer>
      <ReactMarkdown>{content}</ReactMarkdown>
    </ContentContainer>
  );
};
