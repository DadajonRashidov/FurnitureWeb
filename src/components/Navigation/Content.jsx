import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Gor from '../../assets/img/gor.jpg'
import Gor2 from '../../assets/img/gor2.jpg'
import Gor3 from '../../assets/img/gor3.jpg'
function Content() {
    return (        
        <div className="bodyCarousel">
            <div className="TextOnCarousel">
                <h1>Exclusive Deals Of <br /> Furniture <span>Collection </span></h1>
                <p>
                    Explore Different cattalog for our showroom and online service <br />
                    client happyness for our furniture this
                </p>
              <p className="btnOnCarousel">
                    <button className="btnoncr">Buy Now</button>
                    <button className="btnoncrr">Explore</button>
              </p>
                
            </div>

            <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} showStatus={false}>
                <div>
                    <img src={Gor} width={"100%"} height="750px" />
                </div>
                <div>
                    <img src={Gor2} width={"100%"} height="750px" />
                </div>
                <div>
                    <img src={Gor3} width={"100%"} height="750px" />
                </div>
            </Carousel>
        </div>
    );
}

export default Content;