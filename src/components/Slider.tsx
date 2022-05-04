import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import './Slider.scss'

export default function Slider() {
    return <div className='Slider'>
        <Carousel>
            <Carousel.Item interval={2000}>
                <div className='Carousel-inside'>
                    <div id='Burger'></div>
                </div>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <div className='Carousel-inside'>
                    <div id='Pizza'></div>
                </div>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <div className='Carousel-inside'>
                    <div id='Toast'></div>
                </div>
            </Carousel.Item>
        </Carousel>
    </div>
}
