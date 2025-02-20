import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import ProfileCard from "./ProfileCard";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { addUser } from "../utils/userSlice";

const ProfileEdit = () => {
    const user = useSelector((store) => store?.user);
    const dispatch = useDispatch();

    const [firstName, setFirstName] = useState(user?.firstName || "");
    const [lastName, setLastName] = useState(user?.lastName || "");
    const [age, setAge] = useState(user?.age || "");
    const [photoUrl, setPhotoUrl] = useState(user?.photoUrl || "");
    const [gender, setGender] = useState(user?.gender || "");
    const [about, setAbout] = useState(user?.about || "");
    const [showToast,setShowToast] = useState(false);
    const [error,setError] = useState(false);

    const userDetails = {
      firstName,
      lastName,
      age,
      photoUrl,
      gender,
      about
    };

    const handleSubmit = async ()=>{
      try{
        const res = await axios.patch(BASE_URL+"/profile/edit",userDetails,{withCredentials:true});
        dispatch(addUser(res?.data?.data));
        setShowToast(true);
        setTimeout(()=>{
          setShowToast(false)
        },3000)
      }catch(err){
        setError(true);
        setTimeout(()=>{
            setError(false)
        },3000)
        console.error(err);
      }
    }

    return (
        <div className="flex flex-col h-[150vh] lg:flex-row mt-8 justify-center min-h-screen px-4 gap-8">
            {/* Profile Form */}
            <div className="bg-base-300 h-fit rounded-2xl w-full max-w-sm md:max-w-md lg:max-w-lg p-6 md:p-8 shadow-lg">
                <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center">Edit Profile</h1>

                {/* First Name */}
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">First Name</span>
                    </div>
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Type here" className="input input-bordered w-full" required />
                </label>

                {/* Last Name */}
                <label className="form-control w-full mt-3">
                    <div className="label">
                        <span className="label-text">Last Name</span>
                    </div>
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}
                        placeholder="Type here" className="input input-bordered w-full" required />
                </label>

                {/* Age */}
                <label className="form-control w-full mt-3">
                    <div className="label">
                        <span className="label-text">Age</span>
                    </div>
                    <input type="number" value={age} onChange={(e) => setAge(e.target.value)}
                        placeholder="Type here" className="input input-bordered w-full" required />
                </label>

                {/* Photo URL */}
                <label className="form-control w-full mt-3">
                    <div className="label">
                        <span className="label-text">Photo URL</span>
                    </div>
                    <input type="url" value={photoUrl} onChange={(e) => setPhotoUrl(e.target.value)}
                        placeholder="Paste image URL" className="input input-bordered w-full" required />
                </label>

                {/* Gender */}
                <label className="form-control w-full mt-3">
                    <div className="label">
                        <span className="label-text">Gender</span>
                    </div>
                    <select value={gender} onChange={(e) => setGender(e.target.value)}
                        className="select select-bordered w-full" required>
                        <option value="">Select your gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="others">Others</option>
                    </select>
                </label>

                {/* About */}
                <label className="form-control w-full mt-3">
                    <div className="label">
                        <span className="label-text">About</span>
                    </div>
                    <textarea value={about} onChange={(e) => setAbout(e.target.value)}
                        className="textarea textarea-bordered w-full" placeholder="Type here...."></textarea>
                </label>

                {/* Save Button */}
                <div className="flex justify-center mt-5">
                    <button onClick={handleSubmit} className="btn btn-secondary w-full">Save Profile</button>
                </div>
            </div>

            {/* Profile Card */}
            <ProfileCard feed={userDetails} />
           {showToast && 
            <div className="toast toast-top toast-center">
              <div className="alert alert-success">
                <span>Profile saved successfully.</span>
              </div>
            </div>
           }
            {error && 
            <div className="toast toast-top toast-center">
              <div className="alert alert-warning">
                <span>Profile not saved.</span>
              </div>
            </div>
           }
        </div>
        
    );
}

export default ProfileEdit;
