import { Link } from "react-router-dom";
import star from "../../assets/star.svg"

const MovieCard = ({ movie }) => {
  return (
    <div key={movie._id} className="relative group m-[2rem]">
      <Link to={`/movies/${movie._id}`}>
        <img
          src={movie.image}
          alt={movie.name}
          loading="lazy"
          className="w-[20rem] h-[20rem] rounded m-0 p-0 transition duration-300 ease-in-out transform group-hover:opacity-50"
        />
      </Link>

      <p className="flex text-xl justify-evenly absolute top-[85%] left-[2rem] right-0 bottom-0 opacity-0 transition duration-300 ease-in-out group-hover:opacity-100">
        <p>{movie.name}</p>
        {movie.numReviews ? <p className="flex flex-row">{Math.round(movie.rating*10)/10}
          <img src={star} alt="" className="w-5 mb-5 ml-1" />
        </p> : ""}
        
      </p>
    </div>
  );
};

export default MovieCard;