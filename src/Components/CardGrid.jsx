import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import  MyCard from './MyCard';

function CardGrid() {
  return (
    <Container>
      <Row>
        <Col>
            <MyCard img="attels.jpg" title="Kartiņa 1" text="Te būs rakstīts teksts" buttonText="Pogas teksts"></MyCard>
           
        </Col>
        <Col>
             <MyCard img="attels2.jpg" title="Kartiņa 2" text="Te būs rakstīts teksts 2" buttonText="Pogas teksts"></MyCard>
            
        </Col>
        <Col>
            <MyCard img="attels3.jpg" title="Kartiņa 3" text="Te būs rakstīts tekst3" buttonText="Pogas teksts3"></MyCard>
        </Col>
      </Row>
    </Container>
  );
}

export default CardGrid;