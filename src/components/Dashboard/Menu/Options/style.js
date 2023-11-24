import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5em;
  font-size: 22px;
  margin: 1em 4em;

  .switch {
    font-size: 17px;
    position: relative;
    display: inline-block;
    width: 3.5em;
    height: 2em;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    inset: 0;
    background: #dddddd;
    border-radius: 50px;
    transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .slider:before {
    position: absolute;
    content: '';
    height: 1.4em;
    width: 1.4em;
    left: 0.3em;
    bottom: 0.3em;
    background-color: #ffffff;
    border-radius: 50px;
    box-shadow: 0 0px 20px rgba(0, 0, 0, 0.4);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .switch input:checked + .slider {
    background: #84bf81;
  }

  .switch input:focus + .slider {
    box-shadow: 0 0 1px #84bf81;
  }

  .switch input:checked + .slider:before {
    transform: translateX(1.6em);
    width: 2em;
    height: 2em;
    bottom: 0;
  }

  @media (max-width: 1214px) {
    justify-content: center;
  }
`;
