import React from 'react'
import "./style.scss"
import Carousel from 'react-grid-carousel'
import img1 from "../../assets/img/gor.jpg"
import img2 from "../../assets/img/gor2.jpg"
import img3 from "../../assets/img/gor3.jpg"


function pp() {
    return (
        <div className='card-carousel-body'>
            <h1 className='new-arrivals'>New Arrivals</h1>

            <Carousel cols={3} rows={1} gap={40} loop>
                <Carousel.Item >
                    <img width="100%" height={400} style={{ borderRadius: 20, }} src="https://picsum.photos/800/600?random=1" />
                </Carousel.Item>
                <Carousel.Item>
                    <img width="100%" height={400} style={{ borderRadius: 20, }} src="https://picsum.photos/800/600?random=2" />
                </Carousel.Item>
                <Carousel.Item>
                <img width="100%" height={400} style={{ borderRadius: 20, }} src="https://picsum.photos/800/600?random=3" />
                </Carousel.Item>
                <Carousel.Item>
                <img width="100%" height={400} style={{ borderRadius: 20, }} src="https://picsum.photos/800/600?random=4" />
                </Carousel.Item>
                <Carousel.Item>
                <img width="100%" height={400} style={{ borderRadius: 20, }} src="https://picsum.photos/800/600?random=5" />
                </Carousel.Item>
                <Carousel.Item>
                <img width="100%" height={400} style={{ borderRadius: 20, }} src="https://picsum.photos/800/600?random=6" />
                </Carousel.Item>
                <Carousel.Item>
                <img width="100%" height={400} style={{ borderRadius: 20, }} src="https://picsum.photos/800/600?random=7" />
                </Carousel.Item>
                <Carousel.Item>
                <img width="100%" height={400} style={{ borderRadius: 20, }} src="https://picsum.photos/800/600?random=8" />
                </Carousel.Item>
                <Carousel.Item>
                <img width="100%" height={400} style={{ borderRadius: 20, }} src="https://picsum.photos/800/600?random=9" />
                </Carousel.Item>
                <Carousel.Item>
                <img width="100%" height={400} style={{ borderRadius: 20, }} src="https://picsum.photos/800/600?random=10" />
                </Carousel.Item>

            </Carousel>
        </div>
    );
}

export default pp;