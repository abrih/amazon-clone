import {carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {img} from"./img/imgdata"
// import style from"./Carousel.module.css"

const Carousel = () => {
  return (
    <div>
      <carousel>
        autoplay={true}
        infiniteloop={true}
        showIndicator={true}
        showThumbs={true}


        {img?.map((SingleImg, i) => {
          return <img  key={i} src={SingleImg} />;
        })}




      </carousel>
    </div>
  );
}

export default Carousel
