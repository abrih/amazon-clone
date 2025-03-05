
import { HashLoader } from "react-spinners";


const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
      }}
    >
      
      <HashLoader />
    </div>
  );
}

export default Loader

