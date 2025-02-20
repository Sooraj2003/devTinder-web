/* eslint-disable react/prop-types */
const Card = ({feed}) => {

  const {firstName,lastName,about,age,gender,photoUrl} = feed;
  return (
    <div className="card bg-base-300 w-96 shadow-xl">
  <figure>
    <img
      src={photoUrl}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstName+" "+lastName}</h2>
    <p>{about}</p>
   {age && gender && <p>{age+", "+gender}</p> } 
    <div className="card-actions justify-center mt-3">
      <button className="btn btn-primary">Interested</button>
      <button className="btn btn-secondary">Ignore</button>
    </div>
  </div>
</div>
  )
}

export default Card
