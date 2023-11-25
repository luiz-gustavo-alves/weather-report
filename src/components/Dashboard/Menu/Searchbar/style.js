import styled from 'styled-components';

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5em;

  img {
    height: 7.5em;
  }

  h1 {
    font-size: 48px;
    font-weight: 600;
    text-align: center;
  }

  @media (max-width: 700px) {
    flex-direction: column;

    h1 {
      margin: 0 1em;
      font-size: 34px;
    }
  }
`;

export const SearchBar = styled.form`
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

  @media (max-width: 1214px) {
    width: calc(95% - 20px);

    input {
      font-size: 18px;
    }
  }
`;
