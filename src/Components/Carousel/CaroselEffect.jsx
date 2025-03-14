import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { img } from "./img/imgdata"; 
import style from "./Carousel.module.css";

const CaroselEffect = () => {
  return (
    <div>
      <Carousel
        autoplay={true}
        interval={3000}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {img?.map((SingleImg, i) => {
          console.log(SingleImg);
          return <img key={i} src={SingleImg} alt={`Slide ${i}`} />;
        })}
      </Carousel>
      <div className={style.hero_img}></div>
    </div>
  );
}

export default CaroselEffect;
