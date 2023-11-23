import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 350px);
  grid-template-rows: repeat(2, 120px);
  row-gap: 2.5rem;
  column-gap: 3.5rem;
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
  max-width: 350px;

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
  margin: 0.9rem 0;
`;
