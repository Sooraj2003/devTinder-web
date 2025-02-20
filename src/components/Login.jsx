import axios from "axios";
import { useState } from "react"
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const [emailID,setEmailID] = useState("akshay@gmail.com");
  const [password,setPassword] = useState("Akshay@123");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async ()=>{
    try{
      const res = await axios.post(BASE_URL+"/login",{
        emailID,
        password
      },{
        withCredentials:true
      });
  
      dispatch(addUser(res.data));
      navigate("/");

    }catch(err){
      console.error(err);
    }
   
    
  }

  return (
    <div className="flex  justify-center">
  <div className="card bg-base-300 w-96 shadow-xl my-24">
  <div className="card-body items-center text-center">
    <h2 className="card-title">Login</h2>
    <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Email Id</span>
  </div>
  <input type="text" value={emailID} onChange={(e)=>setEmailID(e.target.value)} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
  <label className="form-control w-full max-w-xs my-2">
  <div className="label">
    <span className="label-text">Password</span>
  </div>
  <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
 
  
</label>
</label>
    <div className="card-actions">
      <button onClick={handleLogin} className="btn btn-primary">Login</button>
    </div>
  </div>
</div>
</div>
  )
}

export default Login
