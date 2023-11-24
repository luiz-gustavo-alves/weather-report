import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: ${(props) => (props.$pathname === '/' ? 'center' : 'flex-start')};
  height: 100dvh;

  @media (max-width: 1214px) {
    flex-direction: column;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2em;
  background-color: #f1f1f1;
  padding-left: 1.2em;
  padding-right: 1.2em;
  padding-bottom: 1.6em;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
  height: 100%;
`;

export const NavOptions = styled.div`
  font-size: 34px;
  margin-top: 1em;
  display: flex;
  gap: 2em;

  button {
    background: none;
    outline: none;
    border: none;
    cursor: pointer;
    font-size: 40px;
  }

  .current {
    color: ${(props) => (props.$pathname === '/current' ? '#000000' : '#C8C8C8')};
  }

  .forecast {
    color: ${(props) => (props.$pathname === '/forecast' ? '#000000' : '#C8C8C8')};
  }

  @media (max-width: 700px) {
    flex-direction: column;
    gap: 1em;
    margin-bottom: 0.5em;

    button {
      font-size: 28px;
    }
  }
`;

export const CityContainer = styled.div`
  .name {
    font-size: 90px;
    font-weight: 500;
    white-space: nowrap;
    max-width: 9em;
    overflow-x: auto;
    overflow-y: hidden;
  }

  .coordinates {
    padding-top: 0.5em;
    font-size: 20px;
  }

  ::-webkit-scrollbar {
    width: 5px;
    height: 8px;
    background-color: #aaa;
  }
  ::-webkit-scrollbar-thumb {
    background: #000;
  }

  @media (max-width: 700px) {
    .name {
      font-size: 52px;
      text-align: center;
      word-break: break-word;
      white-space: inherit;
      max-width: none;
      overflow-x: hidden;
      overflow-y: hidden;
      margin-bottom: 0.3em;
    }

    .coordinates {
      font-size: 18px;
      text-align: center;
    }
  }
`;

export const ApiMessage = styled.div`
  font-size: 20px;

  .apiName {
    color: #96a7f2;
    text-decoration: none;
  }
`;
