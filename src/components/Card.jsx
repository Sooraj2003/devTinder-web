import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeFromFeed } from "../utils/feedSlice";

const Card = ({ feed }) => {
  const dispatch = useDispatch();

  const { _id, firstName, lastName, about, age, gender, photoUrl } = feed;

  const handleClick = async (status, id) => {
    await axios.post(BASE_URL + "/request/send/" + status + "/" + id, {}, { withCredentials: true });
    dispatch(removeFromFeed(id));
  };

  return (
    <div className="card bg-base-300 w-full sm:w-80 md:w-96 shadow-xl h-fit rounded-lg overflow-hidden mx-auto">
      <figure>
        <img
          className="h-48 sm:h-60 w-full object-cover"
          src={photoUrl}
          alt={`${firstName} ${lastName}`}
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
        <div className="card-actions flex flex-col sm:flex-row justify-center mt-3 gap-2">
          <button onClick={() => handleClick("interested", _id)} className="btn btn-primary w-full sm:w-auto">
            Interested
          </button>
          <button onClick={() => handleClick("ignored", _id)} className="btn btn-secondary w-full sm:w-auto">
            Ignore
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
