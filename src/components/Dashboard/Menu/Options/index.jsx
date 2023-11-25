import { Container } from './style';

export default function Options({ currentUnit, setCurrentUnit, disableFetch }) {
  function toggleUnit() {
    if (!disableFetch) {
      const newUnit = currentUnit === 'celsius' ? 'fahrenheit' : 'celsius';
      setCurrentUnit(newUnit);
    }
  }

  return (
    <>
      <Container>
        <label className="switch">
          <input type="checkbox" onChange={toggleUnit} disabled={disableFetch} />
          <span className="slider"></span>
        </label>
        <p>°F</p>
      </Container>
    </>
  );
}
