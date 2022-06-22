import { Row, Col } from 'react-bootstrap';
import { ChevronRight } from 'react-bootstrap-icons';

export default function ProfileMenuItem({ name, icon, ...props }) {
  const propsClass = `justify-content-between ${props.className}`;
  return (
    <Row className={propsClass}>
      <Col xs='auto'>
        {icon}
        {name}
      </Col>
      <Col xs='auto'>
        <ChevronRight size={20} className='align-text-bottom' />
      </Col>
    </Row>
  );
}
