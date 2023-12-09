import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';

const CustomCard = ()=>  {
  return (
    <Col>
      <Card style={{ width: '15rem', height: '15rem' }} className='m-3 bg-secondary' border='primary'>
        <Card.Body>
          <Card.Title style={{color:'white'}}><b>Project Title</b></Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Link href="#">Project Link</Card.Link>
          <Card.Link href="#">Preview Link</Card.Link>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default CustomCard;