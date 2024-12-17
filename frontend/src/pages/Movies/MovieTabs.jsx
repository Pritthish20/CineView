import { Link } from "react-router-dom";
import { useState } from "react";
import star from "../../assets/star.svg";
import { FaStar } from "react-icons/fa";

const MovieTabs = ({
  userInfo,
  submitHandler,
  comment,
  setComment,
  movie,
  rating,
  setRating,
}) => {
  const [hover, setHover] = useState(null);
  return (
    <div>
      <section>
        {userInfo ? (
          <form onSubmit={submitHandler}>
            <div className="my-2 p-4">
              <label htmlFor="comment" className="block text-xl mb-2">
                Write Your Review
              </label>

              <textarea
                id="comment"
                rows="3"
                required
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="p-2 border rounded-lg xl:w-[40rem] text-black"
              ></textarea>
            </div>
            <div className="my-2 p-4">
              <label htmlFor="comment" className="block text-xl mb-2">
                Your Rating (Out of 10)
              </label>

              <div className="flex">
                {[...Array(10)].map((star, idx) => {
                  const currentRating = idx + 1;
                  return (
                    <label>
                      <input
                      className="hidden"
                        type="radio"
                        name="rating"
                        value={currentRating}
                        onClick={() => setRating(currentRating)}
                      />
                      <FaStar
                        size={30}
                        className="  m-1"
                        color={currentRating <= (hover || rating) ? "#EC8B19" : ""}
                        onMouseEnter={()=>setHover(currentRating)}
                        onMouseLeave={()=>setHover(null)}
                      />
                    </label>
                  );
                })}
              </div>
            </div>

            <button
              type="submit"
              className="bg-teal-600 text-white py-2 px-4 rounded-lg"
            >
              Submit
            </button>
          </form>
        ) : (
          <p>
            Please <Link to="/login">Sign In</Link> to write a review
          </p>
        )}
      </section>

      <section className="mt-[3rem]">
        <div>{movie?.reviews.length === 0 && <p>No Reviews</p>}</div>

        <div>
          {movie?.reviews.map((review) => (
            <div
              key={review._id}
              className="bg-[#1A1A1A] p-4 rounded-lg w-[50%] mt-[2rem]"
            >
              <div className="flex justify-between">
                <strong className="text-[#B0B0B0]">{review.name}</strong>
                <h3 className="flex text-[#B0B0B0]">
                  {review.rating}
                  <img src={star} alt="" className="w-3 ml-1" />
                </h3>
                <p className="text-[#B0B0B0]">
                  {review.createdAt.substring(0, 10)}
                </p>
              </div>

              <p className="my-4">{review.comment}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MovieTabs;
