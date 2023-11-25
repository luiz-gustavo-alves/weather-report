import styled from 'styled-components';

export const TooltipWrapper = styled.div`
  font-weight: 500;

  .custom-tooltip {
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: #ececec;
    border-radius: 10px;
    padding: 10px;
  }

  .label {
    font-size: 19px;
  }

  .intro {
    font-size: 18px;
    color: #8884d8;
  }
`;
