import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  useGetSpecificMovieQuery,
  useAddMovieReviewMutation,
} from "../../redux/api/movies";
import MovieTabs from "./MovieTabs";
import star from "../../assets/star.svg";

const MovieDetails = () => {
  const { id: movieId } = useParams();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const { data: movie, refetch } = useGetSpecificMovieQuery(movieId);
  const { userInfo } = useSelector((state) => state.auth);
  const [createReview, { isLoading: loadingMovieReview }] =
    useAddMovieReviewMutation();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {

      if(!rating || !comment){
        toast.error("All fields are required");
      }

      else{
        await createReview({
          id: movieId,
          rating,
          comment,
        }).unwrap();
  
        refetch();
        
        toast.success("Review created successfully");
      }
    } catch (error) {
      if (error.data || error.message) {
        toast.error(error.message || error.data);
      }
      toast.error("Movie already reviewed");
    }
  };

  return (
    <>
      <div>
        <Link
          to="/"
          className="  text-white font-semibold hover:underline ml-[20rem]"
        >
          Go Back
        </Link>
      </div>

      <div className="mt-[2rem]">
        <div className="flex justify-center items-center">
          <img
            src={movie?.image}
            alt={movie?.name}
            className="w-[55%] rounded"
            loading="lazy"
          />
        </div>
        {/* Container One */}
        <div className="container  flex justify-between ml-[20rem] mt-[3rem]">
          <section>
            <h2 className="text-5xl my-4 font-extrabold flex justify-between">
              {movie?.name}{" "}
            </h2>

            <p className="my-4 xl:w-[35rem] lg:w-[35rem] md:w-[30rem] text-[#B0B0B0]">
              {movie?.detail}
            </p>
          </section>

          <div className="mt-5">
            <h3 className="text-[#B0B0B0]">Rating</h3>
            <h2 className="flex text-3xl">
              {Math.round(movie?.rating*10)/10}
              <img src={star} alt="" className="w-6 ml-2" />
            </h2>
          </div>

          <div className="mr-[5rem]">
            <p className="text-2xl font-semibold">
              Releasing Date: {movie?.year}
            </p>

            <div className="mr-[5rem]">
              <p className="mt-6 text-2xl font-semibold"> Cast</p>
              {movie?.cast.map((c) => (
                <ul key={c._id}>
                  <li className="mt-[1rem]">{c}</li>
                </ul>
              ))}
            </div>
          </div>
        </div>

        <div className="container ml-[20rem]">
          <MovieTabs
            loadingMovieReview={loadingMovieReview}
            userInfo={userInfo}
            submitHandler={submitHandler}
            rating={rating}
            setRating={setRating}
            comment={comment}
            setComment={setComment}
            movie={movie}
          />
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
