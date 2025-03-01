import CatagoryCard from "./CatagoryCard";
import { catagoryInfo } from "./CatagoryFullinfo";
import classes from "./Catagory.module.css"

const Catagory = () => {
  return (
    <section className={classes.category_container}>
      {catagoryInfo?.map((singleproduct, i) => {
        // console.log(singleproduct);
        return <CatagoryCard key={i} data={singleproduct} />;
      })}
    </section>
  );
};

export default Catagory;
