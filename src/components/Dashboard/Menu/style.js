import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 1.5em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2em;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5em;

  img {
    height: 7.5em;
  }

  h1 {
    font-size: 48px;
    font-weight: 600;
  }
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  gap: 0.6em;
  width: 28em;
  height: 4em;
  padding: 0.5em 1em;
  border-radius: 1.5em;
  background: #f2f2f2;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  input {
    width: 100%;
    height: 100%;
    padding-right: 0.7em;
    background: none;
    border: none;
    outline: none;
    font-size: 20px;
    font-weight: 400;
    font-family: 'Poppins', sans-serif;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;

    img {
      height: 2.5em;
      display: flex;
    }
  }
`;

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

export const DateContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 24px;
  line-height: normal;
`;

export const Options = styled.div`
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
`;

export const Footer = styled.div`
  margin: 0 auto;
  margin-top: 0.6em;
  font-size: 20px;
`;
