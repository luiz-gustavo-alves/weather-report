import { Container, Card, DisplayMessage } from './style';

export default function CurrentWeather() {
  return (
    <>
      <Container>
        <Card>
          <p className="details">Mínima</p>
          <p className="content">31° C</p>
        </Card>
        <Card>
          <p className="details">Máxima</p>
          <p className="content">38° C</p>
        </Card>
        <Card>
          <p className="details">Umidade</p>
          <p className="content">64%</p>
        </Card>
        <Card>
          <p className="details">Velocidade do vento</p>
          <p className="content">12 m/s</p>
        </Card>
      </Container>
      <DisplayMessage>
        <p>Não, você não deve levar um casaquinho!</p>
      </DisplayMessage>
    </>
  );
}
