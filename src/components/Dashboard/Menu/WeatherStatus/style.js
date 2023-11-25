import styled from 'styled-components';

export const Weather = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
  border-bottom: 3px solid #dddddd;
  padding-bottom: 2em;
  margin: 0 auto;
`;

export const Temperature = styled.div`
  display: flex;
  align-items: center;
  font-size: 64px;
  font-weight: 600;
  color: ${(props) => props.$fontColor};

  @media (max-width: 700px) {
    font-size: 40px;
    img {
      width: 80px;
    }
  }
`;

export const Details = styled.div`
  font-size: 30px;
`;
