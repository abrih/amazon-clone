import Header from"../Header/Header"
import LowerHeader from "../Header/LowerHeader";


const LayOut = ({children}) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default LayOut
