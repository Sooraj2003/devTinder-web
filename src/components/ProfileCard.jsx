
const ProfileCard = ({ feed }) => {
  const { firstName, lastName, about, age, gender, photoUrl, skills } = feed;

  return (
    <div className="card bg-base-300 w-full sm:w-80 md:w-96 shadow-xl h-fit rounded-lg overflow-hidden mx-auto md:mx-0">
      <figure className="w-full">
        <img
          src={photoUrl}
          alt={`${firstName} ${lastName}`}
          className="w-full h-48 md:h-56 object-cover"
        />
      </figure>
      <div className="card-body p-4 sm:p-6">
        <h2 className="card-title text-lg sm:text-xl font-bold">
          {firstName} {lastName}
        </h2>
        <p className="text-sm sm:text-base text-gray-200">{about}</p>
        {age && gender && (
          <p className="text-sm sm:text-lg font-semibold mt-2">
            {age}, {gender}
          </p>
        )}
        {skills && (
          <p className="text-sm sm:text-base text-gray-300 mt-2">{skills}</p>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
