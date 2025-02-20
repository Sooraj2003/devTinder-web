/* eslint-disable react/prop-types */
const ProfileCard = ({feed}) => {

    const {firstName,lastName,about,age,gender,photoUrl,skills} = feed;
    return (
      <div className="card bg-base-300 w-96 shadow-xl h-fit">
    <figure>
      <img
        src={photoUrl}
        alt="Shoes" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{firstName+" "+lastName}</h2>
      <p>{about}</p>
     {age && gender && <p className="text-lg font-semibold">{age+", "+gender}</p> } 
     {skills && <p>{skills}</p>}
    </div>
  </div>
    )
  }
  
  export default ProfileCard;
  