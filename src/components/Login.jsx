import axios from "axios";
import { useState } from "react"
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const [emailID,setEmailID] = useState("");
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState("");
  const [isLogin,setIsLogin] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (isLogin)=>{
    try{
      if(isLogin){
        const res = await axios.post(BASE_URL+"/login",{
          emailID,
          password
        },{
          withCredentials:true
        });
    
        dispatch(addUser(res.data));
        navigate("/");
      }else{
        const res = await axios.post(BASE_URL+"/signup",{
          firstName,
          lastName,
          emailID,
          password
        },{
          withCredentials:true
        });
        dispatch(addUser(res.data));
        navigate("/profile")
      }
      

    }catch(err){
      setError(err.response.data);
      console.error(err);
    }
   
    
  }

  return (
    <div className="flex  justify-center ">
  <div className="card bg-base-300 w-96 shadow-xl my-24 mt-2">
  <div className="card-body items-center text-center">
    <h2 className="card-title">{isLogin ? "Login":"Sign up"}</h2>
    <label className="form-control w-full max-w-xs">
    {!isLogin && <><div className="label">
    <span className="label-text">First Name</span>
  </div>
  <input type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
  <div className="label">
    <span className="label-text">Email Id</span>
  </div>
  <input type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)} placeholder="Type here" className="input input-bordered w-full max-w-xs" /></>}
  <div className="label">
    <span className="label-text">Email Id</span>
  </div>
  <input type="text" value={emailID} onChange={(e)=>setEmailID(e.target.value)} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
  <label className="form-control w-full max-w-xs my-2">
  <div className="label">
    <span className="label-text">Password</span>
  </div>
  <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
 {error && <p className="text-left text-red-600 mt-4">{error}</p>}
  <p onClick={()=>setIsLogin((state)=>!state)}className="mt-4 cursor-pointer text-sm">{isLogin ? "Not yet registered? Sign up" : "Already registered? Login now"}</p>
</label>
</label>
    <div className="card-actions">
      <button onClick={()=>handleLogin(isLogin)} className="btn btn-primary">{isLogin ? "Login":"Sign up"}</button>
    </div>
  </div>
</div>
</div>
  )
}

export default Login
