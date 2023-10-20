import React from 'react';
import { Carousel, Image } from 'react-bootstrap';

const FullWidthImage = () => (
  <Carousel>
    <Carousel.Item>
      <Image className="d-block w-100" src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/fw23_ivy_park_noir_launch_hp_mh_d_ce988edad6.jpg" alt="First slide" />
      <Carousel.Caption>
        <h3>1</h3>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <Image className="d-block w-100" src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/xcat_fw23_holiday_oct_shoes100andunder_hp_large_mh_d_a30cea1a31.jpg" alt="Second slide" />
      <Carousel.Caption>
        <h3>2</h3>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>

  /* (Single image)
    <Row className="justify-content-center">
       <Image className="pt-1" src="poster1.png" alt="Adidas-homepage"/>
    </Row>
  */
);

export default FullWidthImage;
