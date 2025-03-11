import { useEffect } from "react";
import "./App.css";
import Routing from "./Routering"
import { useContext } from "react";
import { DataContext} from "./Components/DataProvider/DataProvider";
import {Type} from "./Utility/action.type"
import {auth}from "./Utility/firebase"
import payment from "./Pages/Payment/Payment"

function App() {

  const [{user}, dispatch] = useContext(DataContext)

  useEffect(()=>{

auth.onAuthStateChanged((authUser)=>{
  if(authUser){
    console.log(authUser);
    dispatch({
      type: Type.SET_USER,
      user: authUser
    })
  } else{
    dispatch({
      type: Type.SET_USER,
      user: null,
    });
  }
})
  },[])

  return (
    <>
      <payment/>
      <Routing/>
    </>
  );
}

export default App
