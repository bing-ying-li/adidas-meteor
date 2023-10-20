import React from 'react';
import { Container, Nav, Navbar, Col, Row } from 'react-bootstrap';
import { Facebook, Instagram, Pinterest, Tiktok, Twitter, Youtube } from 'react-bootstrap-icons';

const FooterMenu = () => (
  <footer>
    <Container>
      <Row id="footFont">

        <Col>
          <strong>PRODUCTS</strong>
          <hr />
          <div>Shoes</div>
          <div>Clothing</div>
          <div>Accessories</div>
          <div>Gift Cards</div>
          <div>New Arrivals</div>
          <div>Best Sellers</div>
          <div>Release Dates</div>
          <div>Sale</div>
        </Col>

        <Col>
          <strong>SPORTS</strong>
          <hr />
          <div>Soccer</div>
          <div>Running</div>
          <div>Basketball</div>
          <div>Football</div>
          <div>Outdoor</div>
          <div>Golf</div>
          <div>Baseball</div>
          <div>Tennis</div>
          <div>Skateboarding</div>
          <div>Training</div>
        </Col>

        <Col>
          <strong>COLLECTIONS</strong>
          <hr />
          <div>adicolor</div>
          <div>Ultraboost</div>
          <div>NMD</div>
          <div>Forum</div>
          <div>Superstar</div>
          <div>Running Shoes</div>
          <div>adilette</div>
          <div>Stan Smith</div>
          <div>adizero</div>
          <div>Tiro</div>
          <div>EQT</div>
        </Col>

        <Col>
          <strong>FOLLOW US</strong>
          <hr />
          <Container>
            <Navbar>
              <Nav className="flex-column">
                <Nav.Item>
                  <Nav.Link href="#"><Facebook /></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#"><Instagram /></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#"><Twitter /></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#"><Pinterest /></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#"><Tiktok /></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#"><Youtube /></Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar>
          </Container>
        </Col>

      </Row>
    </Container>
  </footer>
);

export default FooterMenu;
