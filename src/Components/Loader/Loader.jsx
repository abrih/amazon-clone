
import { FadeLoader } from "react-spinners";


const Loader = () => {
  return (
    <div>
        style={{display:"flex",
            alignItems:"center",
        }}

      <FadeLoader color="#18e1b1" height={19} speedMultiplier={1} />
    </div>
  );
}

export default Loader

