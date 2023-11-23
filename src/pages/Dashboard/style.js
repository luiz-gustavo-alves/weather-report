import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  height: 100dvh;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2em;
  background-color: #f1f1f1;
  padding-left: 2.5em;
  padding-bottom: 1.6em;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
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
    background-color: #aaa; /* or add it to the track */
  }
  ::-webkit-scrollbar-thumb {
    background: #000;
  }
`;

export const ApiMessage = styled.div`
  font-size: 20px;

  .apiName {
    color: #96a7f2;
    text-decoration: none;
  }
`;
