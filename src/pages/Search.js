import { Col, Container, Row, Offcanvas, Card } from 'react-bootstrap';
import { FilterSquare } from 'react-bootstrap-icons';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import { useSearchParams } from 'react-router-dom';
import SearchNotFound from '../components/SearchNotFound';
import SearchWaiting from '../components/SearchWaiting';
import MerchantItem from '../components/MerchantItem';

import { useState } from 'react';

export default function Search() {
  // State filter of canvas
  const [show, setShow] = useState(false);
  // hasil fetch api
  const items = true;
  // search keyword
  const [search, setSearch] = useSearchParams();
  let keyword = search.get('k');

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    setSearch({ k: string });
    // langsung fectch api untuk mendapatkan list, lalu tampilkan
  };

  // untuk menentukan content mana yang dipilih
  let content = () => {
    // jika input kosong,
    if (keyword === '' || keyword === null) return <SearchWaiting />;
    // jika ada hasil pada variable items
    if (items) return <MerchantItem />;
    // jika tidak ada yang sesuai
    // jika tidak ada item yang tersedia
    return <SearchNotFound />;
  };

  return (
    <Container className='mt-3'>
      <Row className='justify-content-center'>
        <Col
          lg={4}
          className={
            keyword === null || keyword.length === 0
              ? 'd-none'
              : 'd-none d-lg-block'
          }
        >
          <h1>Filter {keyword === null ? 'null' : 'sa'}</h1>
        </Col>
        <Col lg={8}>
          <Row className='align-items-center mb-3'>
            <Col>
              <ReactSearchAutocomplete
                items=''
                autoFocus
                placeholder='Search'
                inputDebounce={500}
                maxResults={10}
                styling={{
                  boxShadow: 'none',
                  borderRadius: '0.5rem',
                  clearIconMargin: '0 12px 0 0',
                  searchIconMargin: '0 0 0 12px',
                }}
                showNoResults={false}
                inputSearchString={keyword ?? ''}
                onSearch={handleOnSearch}
              />
            </Col>
            <Col xs={'auto'}>
              <FilterSquare
                size={40}
                className={
                  keyword === null || keyword.length === 0
                    ? 'd-none'
                    : 'd-lg-none'
                }
                onClick={() => setShow(true)}
              />
              <Offcanvas
                show={show}
                onHide={() => setShow(false)}
                responsive='lg'
                placement='bottom'
              >
                <Offcanvas.Header>
                  <Offcanvas.Title>
                    <h1>Filter</h1>
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <h5>Category</h5>
                  <Row className='gy-3'>
                    <Col xs='auto'>
                      <Card className='shadow-sm'>
                        <Card.Body className='p-2'>Foods</Card.Body>
                      </Card>
                    </Col>
                    <Col xs='auto'>
                      <Card className='shadow-sm'>
                        <Card.Body className='p-2'>Drink</Card.Body>
                      </Card>
                    </Col>
                    <Col xs='auto'>
                      <Card className='shadow-sm'>
                        <Card.Body className='p-2'>Frozen Food</Card.Body>
                      </Card>
                    </Col>
                    <Col xs='auto'>
                      <Card className='shadow-sm'>
                        <Card.Body className='p-2'>Nasi Ayam</Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Offcanvas.Body>
              </Offcanvas>
            </Col>
          </Row>
          <Row>{<SearchWaiting />}</Row>
        </Col>
      </Row>
    </Container>
  );
}
