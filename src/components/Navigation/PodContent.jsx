import Gor from '../../assets/img/gor.jpg'
import Gor2 from '../../assets/img/gor2.jpg'
import Gor3 from '../../assets/img/gor3.jpg'
function PodContent() {
    return (
        <div className="body-pod-content">
            <h1>Why <br /> <span>You Get</span> With <br /> Our Furniture</h1>
            <p className="pod-h1-text">
                More by more profit for you buy the best ,Do your <br />
                home smart, good, loking modern
            </p>
            <p className='imgs'>
                <img src={Gor} alt="" width={"200px"} height="200px" />
                <img src={Gor2} alt="" width={"200px"} height="200px" />
                <img src={Gor3} alt="" width={"200px"} height="200px" />
            </p>
        </div>
    );
}

export default PodContent;