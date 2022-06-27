import { Container, Row, Col, Spinner } from 'react-bootstrap';

export default function LoadingPage() {
  return (
    <Container>
      <Row className='vh-100 align-items-center'>
        <Col className='text-center'>
          <Spinner
            animation='border'
            role='status'
            style={{ width: '5rem', height: '5rem' }}
            variant='secondary'
          >
            <span className='visually-hidden'>Loading...</span>
          </Spinner>
        </Col>
      </Row>
    </Container>
  );
}
