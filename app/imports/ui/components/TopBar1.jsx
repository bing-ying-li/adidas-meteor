import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Container, Navbar, Dropdown, Col } from 'react-bootstrap';

const TopBar1 = () => (
  <Navbar expand-lg bg="dark">
    <Container className="text-center">
      <Col>
        <Dropdown>
          <Dropdown.Toggle variant="dark" id="navFont">FREE STANDARD SHIPPING & RETURE</Dropdown.Toggle>
        </Dropdown>
      </Col>
    </Container>
  </Navbar>
);

export default TopBar1;
