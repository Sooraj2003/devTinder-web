import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { filterRequests } from "../utils/requestsSlice";

const RequestCard = ({ request }) => {
    const {firstName, lastName, age, gender, photoUrl, about } = request.fromUser;
    const dispatch = useDispatch();

    const handleClick = async (status,id)=>{
      try{
        await axios.post(BASE_URL+"/request/review/"+status+"/"+id,{},{withCredentials:true});
        dispatch(filterRequests(id));

      }catch(err){
        console.error(err);
      }
       
    }
  
    return (
      <div className="w-full p-4 flex justify-center">
        <div className="min-h-[200px] w-full max-w-lg md:max-w-3xl rounded-lg bg-base-300 my-4 p-4 flex flex-col md:flex-row md:items-center md:gap-6 shadow-lg">
          {/* Profile Image */}
          <img
            src={photoUrl}
            alt={`${firstName} ${lastName}`}
            className="w-full max-w-[180px] md:max-w-[200px] h-40 md:h-48 object-cover rounded-lg shadow-md mx-auto md:mx-0"
          />
  
          {/* User Info */}
          <div className="flex flex-col text-center md:text-left w-full">
            <h1 className="text-2xl font-semibold">{firstName + " " + lastName}</h1>
            <p className="py-2 text-sm">{about}</p>
           {age && gender && <p className="text-lg font-semibold">{age}, {gender}</p>}
          </div>
  
          {/* Buttons */}
          <div className="flex justify-center md:justify-end gap-3 mt-4 md:mt-0">
            <button onClick={()=>handleClick("accepted",request.connectionRequestId)} className="btn btn-primary px-4 py-2 text-sm md:text-base">Accept</button>
            <button onClick={()=>handleClick("rejected",request.connectionRequestId)}className="btn btn-secondary px-4 py-2 text-sm md:text-base">Reject</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default RequestCard;
  