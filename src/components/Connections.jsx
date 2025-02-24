import axios from "axios";
import { BASE_URL } from "../utils/constants";
import ConnectionsCard from "./ConnectionsCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionsSlice";

const Connections = () => {

  const dispatch = useDispatch();
  const connections = useSelector((store)=>store?.connections);

  const fetchConnections = async ()=>{
      try{
        const res = await axios.get(BASE_URL+"/user/connections",{withCredentials:true});
        dispatch(addConnections(res?.data?.connections))
      }catch(err){
        console.error(err);
      }
    }

    useEffect(()=>{
          fetchConnections();
    },[connections])
   if(!connections) return;

   if(connections?.length<=0) return <h1 className="text-center text-xl md:text-3xl font-bold mt-4">No Connections, go and make some connections.</h1>
  return (
    <div className="h-[140vh]">
       <h1 className="text-4xl font-bold text-center my-8 w-screen">Connections.</h1>
       {connections?.map((connection)=>{
        return <ConnectionsCard key={connection?._id} connection={connection}/>
       })}
      
    </div>
  )
}

export default Connections;
