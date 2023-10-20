import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const TopBar2 = () => (
  <Navbar fluid className="justify-content-end py-sm-0 font-size-color">
    <Nav>
      <Nav.Item>
        <Nav.Link href="#">help</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#">exchanges & returns</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#">order tracker</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#">join adiclub</Nav.Link>
      </Nav.Item>
    </Nav>
  </Navbar>
);

export default TopBar2;
