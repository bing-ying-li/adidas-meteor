import React from 'react';
import { Container, Button, Col, Row } from 'react-bootstrap';

const Wordlink = () => (
  <Container className="py-4">
    <Row>
      <Col className="nav justify-content-start">
        <Button variant="dark">New Arrivals</Button>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <Button variant="outline-dark">What's Trending</Button>
      </Col>
      <Col className="nav justify-content-end">
        <p>VIEW ALL</p>
      </Col>
    </Row>
  </Container>

);

export default Wordlink;
