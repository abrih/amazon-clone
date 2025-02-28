import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { img } from "./img/imgdata"; 
import style from "./Carousel.module.css";

const CaroselEffect = () => {
  return (
    <div>
      <Carousel
        autoplay={true}
        infiniteLoop={true}
        // showIndicators={true}
        showIndicators={false}
        showThumbs={true}
      >
        {img?.map((SingleImg, i) => {
          return <img key={i} src={SingleImg} alt={`Slide ${i}`} />;
        })}
      </Carousel>
      <div className={style.car_wrapper}></div>
    </div>
  );
};

export default CaroselEffect;
