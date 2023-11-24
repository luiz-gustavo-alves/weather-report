import styled from 'styled-components';

export const Weather = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
  border-bottom: 3px solid #dddddd;
  padding-bottom: 2em;
  margin: 0 3em;

  .details {
    font-size: 30px;
  }
`;

export const Temperature = styled.div`
  font-size: 64px;
  font-weight: 600;
  color: #ec6e4c;
`;
