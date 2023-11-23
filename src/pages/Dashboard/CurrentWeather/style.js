import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Container = styled.div`
  display: grid;
  row-gap: 2.5rem;
  column-gap: 3.5rem;
  grid-template-columns: repeat(2, 425px);
  grid-template-rows: repeat(2, 120px);
  margin-right: 1em;

  @media (max-width: 1462px) {
    grid-template-columns: repeat(2, 45%);
  }

  @media (max-width: 700px) {
    grid-template-columns: repeat(1, 100%);
    grid-template-rows: repeat(1, 100px);
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 25px;
  gap: 10px;
  background-color: #4d4499;
  border-radius: 25px;
  color: #ffffff;
  font-weight: 500;
  min-width: 300px;

  .details {
    font-size: 18px;
  }

  .content {
    font-size: 32px;
  }

  &:hover {
    opacity: 0.8;
  }
`;

export const DisplayMessage = styled.div`
  font-size: 22px;
  font-style: italic;
  font-weight: 300;
  color: #afadad;
  margin: 2em 0;
`;
