import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';

const CustomCard = ()=>  {
  return (
    <Col>
      <Card style={{ width: '15rem', height: '20rem' }} className='m-3'>
        <Card.Body>
          <Card.Title>Project Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Type: Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Technologies: Dapibus ac facilisis in</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Project Link</Card.Link>
          <Card.Link href="#">Preview Link</Card.Link>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default CustomCard;