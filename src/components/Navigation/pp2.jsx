import React from 'react'
import "./style.scss"
import Carousel from 'react-grid-carousel'



function pp2() {
    return (
        <div className='card-carousel-body'>
            <h1 className='new-arrivals'>Popular Products</h1>

            <Carousel cols={3} rows={1} gap={40} loop>
                <Carousel.Item >
                    <img width="100%" height={400} style={{ borderRadius: 20, }} src="https://picsum.photos/800/600?random=11" />
                </Carousel.Item>
                <Carousel.Item>
                    <img width="100%" height={400} style={{ borderRadius: 20, }} src="https://picsum.photos/800/600?random=12" />
                </Carousel.Item>
                <Carousel.Item>
                    <img width="100%" height={400} style={{ borderRadius: 20, }} src="https://picsum.photos/800/600?random=13" />
                </Carousel.Item>
                <Carousel.Item>
                    <img width="100%" height={400} style={{ borderRadius: 20, }} src="https://picsum.photos/800/600?random=14" />
                </Carousel.Item>
                <Carousel.Item>
                    <img width="100%" height={400} style={{ borderRadius: 20, }} src="https://picsum.photos/800/600?random=15" />
                </Carousel.Item>
                <Carousel.Item>
                    <img width="100%" height={400} style={{ borderRadius: 20, }} src="https://picsum.photos/800/600?random=16" />
                </Carousel.Item>
                <Carousel.Item>
                    <img width="100%" height={400} style={{ borderRadius: 20, }} src="https://picsum.photos/800/600?random=17" />
                </Carousel.Item>
                <Carousel.Item>
                    <img width="100%" height={400} style={{ borderRadius: 20, }} src="https://picsum.photos/800/600?random=18" />
                </Carousel.Item>
                <Carousel.Item>
                    <img width="100%" height={400} style={{ borderRadius: 20, }} src="https://picsum.photos/800/600?random=19" />
                </Carousel.Item>
                <Carousel.Item>
                    <img width="100%" height={400} style={{ borderRadius: 20, }} src="https://picsum.photos/800/600?random=20" />
                </Carousel.Item>

            </Carousel>
        </div>
    );
}

export default pp2;