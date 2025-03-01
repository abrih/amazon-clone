import LayOut from "../../Components/Layout/LayOut";
import CarouselEffect from "../../Components/Carousel/CaroselEffect";
import Catagory from "../../Components/Category/Catagory";
import Product from "../../Components/Product/Product";


const Landing = () => {
  return (
    <LayOut>
      <CarouselEffect />
      <Catagory />
      <Product />
    </LayOut>
  );
}

export default Landing
