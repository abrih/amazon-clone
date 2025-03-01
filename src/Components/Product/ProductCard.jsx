import Rating from "@mui/material/Rating"

const ProductCard = () => {
  return (
    <div>
      <a>
        <img src="" alt=""/>
      </a>
      <div>
        <h3>title</h3>
        <div>
            {/* {rating} */}
            <Rating Value={5} precision={0.1}/>
            {/* {price} */}
        </div>
      </div>
      {/* {proce} */}
    </div>
  )
}

export default ProductCard
