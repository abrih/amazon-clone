import classes from "./Catagory.module.css"
import {Link} from "react-router-dom"

const CatagoryCard = ({data}) => {
  // console.log(data);
  return (
    <div className={classes.category}>
      <Link to={`/amazon-clone/category/${data.name}`}>
        <span>
          <h2>{data.title}</h2>
        </span>
        <img src={data.imgLink} alt="" />
        <p>shop now</p>
      </Link>
    </div>
  );
}

export default CatagoryCard
