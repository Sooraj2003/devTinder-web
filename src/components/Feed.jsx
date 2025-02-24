import axios from "axios"
import Card from "./Card"
import { BASE_URL } from "../utils/constants"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addFeed } from "../utils/feedSlice"

const Feed = () => {

  const dispatch = useDispatch();
  const feed = useSelector((store)=>store?.feed);

  const fetchFeed = async ()=>{
    try{
      const res = await axios.get(BASE_URL+"/user/feed",{withCredentials:true});
      dispatch(addFeed(res?.data?.feed))
    }catch(err){
      console.error(err)
    }
   
  }

  useEffect(()=>{
    fetchFeed();
  },[])

  if(!feed) return;

  if(feed.length<=0) return <h1 className="text-center text-3xl font-bold my-4">All feeds are over wait for new users to join</h1>

  return feed && (
    <div className="flex justify-center mt-5 h-screen">
      <Card feed={feed[0]}/>
    </div>
  )
}

export default Feed
