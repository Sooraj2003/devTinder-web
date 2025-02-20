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
   const res = await axios.get(BASE_URL+"/user/feed",{withCredentials:true});
   dispatch(addFeed(res?.data?.feed))
  }

  useEffect(()=>{
    if(feed) return;
    fetchFeed();
  },[])

  return feed && (
    <div className="flex justify-center mt-20">
      <Card feed={feed[0]}/>
    </div>
  )
}

export default Feed
