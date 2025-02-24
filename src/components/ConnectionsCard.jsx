const ConnectionsCard = ({connection}) => {

    
    const {firstName,lastName,age,gender,photoUrl,about} = connection;
    return connection && (
      <div className="hero w-full p-4">
        <div className="min-h-[200px] w-3/4 rounded-lg bg-base-300 my-4 hero-content flex flex-col lg:flex-row lg:justify-between items-center lg:items-start gap-4 p-4">
          <img
            src={photoUrl}
            className="w-full max-w-xs lg:w-1/3 h-40 lg:h-48 object-cover rounded-lg shadow-lg"
          />
          <div className="text-center lg:w-2/3 md:my-8 lg:text-left">
            <h1 className="text-2xl font-semibold">{firstName+" "+lastName}</h1>
            <p className="py-2 text-sm">
             {about}
            </p>
            {age && gender &&<p className="text-lg font-semibold">{age+", "+gender}</p>}
          </div>
        </div>
      </div>
    );
  };
  
  export default ConnectionsCard;
  