import Slider from "react-slick";
import Reviews from "../public/reviews";

const Experiences = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="experiences">
        <h2>Experiences</h2>
        <Slider {...settings}>
            {
                Reviews.map((review) => {
                    return(
                        <div key={review.id} className="review-container">
                            <h3>{review.text}</h3>
                            <p>-{review.name}</p>
                        </div>  
                    )
                })
            }
        </Slider>
      </div>
    );
}
 
export default Experiences;