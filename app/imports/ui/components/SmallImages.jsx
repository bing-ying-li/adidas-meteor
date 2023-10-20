import React from 'react';
import { Container, Navbar, Image } from 'react-bootstrap';

const SmallImages = () => (
  <Container>
    <Navbar fluid className="justify-content-center py-3">
      <Image className="px-2" src="https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/b0b6d4a107ad4e84b3baaf8700866f07_9366/campus-00s-shoes.jpg" alt="Image1" width="300px" />
      <Image className="px-2" src="https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/a6a1ecb378204fc6a5a3571b1a3a973e_9366/samba-og-shoes-kids.jpg" alt="Image2" width="300px" />
      <Image className="px-2" src="https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/eb4fe70570824a5993f305aca11473de_9366/samba-shoes.jpg" alt="Image3" width="300px" />
      <Image className="px-2" src="https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/52c951e30dcb4ff1bfdfd053405a6f75_9366/samba-shoes.jpg" alt="Image4" width="300px" />
    </Navbar>
  </Container>
);

export default SmallImages;
