import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 1.5em 0.6em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2em;
  min-width: 500px;

  @media (max-width: 700px) {
    min-width: auto;
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 2em;
  height: 100%;
`;

export const Footer = styled.div`
  margin: 0 auto;
  margin-top: 0.6em;
  font-size: 20px;
`;
