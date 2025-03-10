import React, { useState, useContext } from 'react'
import classes from "./SignUp.module.css"
import {auth} from "../../Utility/firebase"
import {getAuth,signInWithEmailAndPassword, createUserWithEmailAndPassword,} from "firebase/auth";
import {DataContext}from "../../Components/DataProvider/DataProvider"
import {ClimbingBoxLoader} from "react-spinners"
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import {Type} from "../../Utility/action.type"




const SignUp = () => {
  
  const [email,setEmail]=useState("");
  const [password, setPassword]= useState("");
  const [error, setError] = useState("");
  const[showpassword,setShowpassword]=useState(false);
  
  const Type = { SET_USER: "SET_USER" };
// console.log(email, password);

const [{user},dispatch] = useContext(DataContext)

const navigate= useNavigate();

//Loading using React-Spinner
const [loading,setLoading] =useState({signin:false, sigup:false})

console.log(user);
//function to handle signin and signout
const authHandler = async (e)=>{
  e.preventDefault(); // preveent auto refresh
// console.log(e.target.name); // separatea authHander action based on btn name

if (e.target.name==="signin"){
  setLoading({signin:true})
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // console.log(userCredential),
    dispatch({
      type:Type.SET_USER,
      user:userCredential.user,
    })
    setLoading({signin:false});
    navigate("/amazon-clone")
  })
  .catch((err) => setError(err.message));
  setLoading({signin:false})
} else{
  setLoading({signup:true})
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) =>{
    // console.log(userCredential),
    dispatch({
      type: Type.SET_USER,
      user: userCredential.user,
    })
    setLoading({signup:false});
    navigate("/amazon-clone")
})
.catch((err) => setError(err.message));
setLoading({signup:false})
}

}

  return (
    <>
      <div className={classes.sign_in_page}>
        <div className={classes.amazon_img}>
          <Link to={"/"}>
            <img src="./public/Amazon_2024.svg.png" alt="amazon logo" />
          </Link>
        </div>

        <div className={classes.sign_in_container}>
          <h1>Sign-In</h1>
          <form>
            <div className={classes.input_group}>
              <label htmlFor="email">Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                placeholder="enter your email"
              />
            </div>
            <div className={classes.input_group}>
              <label htmlFor="password">Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)} //controlled input
                type="password"
                id="password"
                placeholder="Enter your password here"
              />
            </div>
            <button
              type="submit"
              name="signin"
              onClick={authHandler}
              className={classes.sign_in_btn}
            >
              Sign-In
            </button>
          </form>
          {loading.signin ? <ClimbingBoxLoader /> : ""}
          <div className="extra-options">
            <a href="#">Forgot your password?</a>
            <p>
              By signing-in you agree to AMAZON FAKE CLONE conditions or use &
              Sale. Please see our privacy notice. Our cookies Notice and our
              interest-Based Ads Notice
            </p>
          </div>
          <div className={classes.create_account}>
            <p>New to Amazon?</p>
            <button
              type="submit"
              name="signup"
              onClick={authHandler}
              className={classes.signup_btn}
            >
              Create your Amazon account
            </button>
            {loading.signin ? <ClimbingBoxLoader /> : ""}
          </div>
          {error && (
            <small
              style={{ color: "red", paddingLeft: "80px", paddingTop: "15px" }}
            >
              {error}
            </small>
          )}
        </div>
      </div>
    </>
  );
};

export default SignUp
