import axios from "axios"
import { BASE_URL } from "../utils/constants"
import RequestCard from "./RequestCard"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { addRequests } from "../utils/requestsSlice"

const Requests = () => {
  const dispatch = useDispatch();
  const requests = useSelector((store)=>store?.requests);
  const fetchRequests = async ()=>{
     const res = await axios.get(BASE_URL+"/user/requests",{withCredentials:true});
     dispatch(addRequests(res?.data?.data));
    }
        useEffect(()=>{
          fetchRequests();
        },[requests])

      if(!requests) return <h1 className="text-3xl font-bold text-center my-4">No requests found.</h1>

      if(requests.length<=0) return <h1 className="text-3xl font-bold text-center my-4">No requests found, send some requests to build connection.</h1>
  return (
    <div className="h-[120vh]">
      <h1 className="text-center text-3xl font-bold mt-5">Requests.</h1>
      {requests?.map((request)=>{
        return <RequestCard key={request?._id} request={request}/>
      })}
      
    </div>
  )
}

export default Requests
