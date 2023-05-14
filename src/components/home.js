import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import pancake from './image/pancake.jpg'

import allblack from './image/black.jpg'
import { Carousel } from 'react-bootstrap';
import cat02 from './image/cat02.jpg'

const Home = () => {
  return (
    <div>
     
      
      <Carousel>
          <Carousel.Item>
            <img
            className="d-block w-100"
            src={ pancake }
            alt="First slide"
            
            height="650px"
            />
            <Carousel.Caption>
              <h1>新品快訊</h1>
              <h2>蜂蜜冰淇淋鬆餅</h2>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ cat02 }
            alt="Second slide"
            
            height="650px"
          />

          <Carousel.Caption>
            <h3>新夥伴阿依古快來找她玩</h3>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ allblack }
            alt="Third slide"
            
            height="650px"
          />

          <Carousel.Caption>
            <h1>公告</h1>
            <h2>端午連假正常開放，用餐時間2小時</h2>
            <h2>週三、週四店休</h2>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
 
export default Home;