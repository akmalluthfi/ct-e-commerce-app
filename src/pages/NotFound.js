import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <Container>
      <Row className='vh-100 align-items-center justify-content-center'>
        <Col sm={10} md={8} lg={6} xl={5}>
          <img
            src='/assets/not-found.svg'
            alt='not found page'
            className='w-100'
          />
          <h1 className='text-center mt-3'>
            <span className='text-danger'>Oops! </span>Page Not Found
          </h1>
          <h5 className='text-center'>
            The page you're looking for doesn't exists.
          </h5>
          <div className='text-center mt-3'>
            <Button
              className='btn btn-gunmetal text-white'
              onClick={() => navigate(-1)}
            >
              Go Back
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
