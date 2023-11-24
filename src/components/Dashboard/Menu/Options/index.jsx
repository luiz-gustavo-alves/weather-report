import { Container } from './style';

export default function Options({ currentUnit, setCurrentUnit, setFetchData }) {
  function toggleUnit() {
    const newUnit = currentUnit === 'celsius' ? 'fahrenheit' : 'celsius';
    setCurrentUnit(newUnit);
    setFetchData(new Date());
  }

  return (
    <>
      <Container>
        <label className="switch">
          <input type="checkbox" onChange={toggleUnit} />
          <span className="slider"></span>
        </label>
        <p>°F</p>
      </Container>
    </>
  );
}
