import styled from "styled-components";

export const ContentContainer = styled.div`
  width: 100%;
  max-width: 800px;
  padding: 1.5rem 5rem;
  background: #1a202c;
  color: #d9d9d9;

  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  line-height: 1.6;
  overflow-wrap: break-word;

  h1,
  h2,
  h3,
  h4 {
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    color: #d9d9d9;
  }

  p {
    margin-bottom: 1rem;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 1rem 0;

    th,
    td {
      padding: 0.75rem;
      text-align: left;
      border-bottom: 1px solid #2d3748;
    }

    th {
      background-color: #2d3748;
      font-weight: 600;
    }
  }

  ul,
  ol {
    padding-left: 1.5rem;
    margin: 1rem 0;
  }

  li {
    margin-bottom: 0.5rem;
  }

  code {
    background: #2d3748;
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
    font-family: monospace;
  }

  pre {
    background: #2d3748;
    padding: 1rem;
    border-radius: 4px;
    overflow-x: auto;
    margin: 1rem 0;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    width: 80vw;
    max-width: 300px;
    padding: 1rem;
  }
`;
