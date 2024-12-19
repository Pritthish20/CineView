import SecondaryCard from "./SecondaryCard";
import VideoCard from "./VideoCard";
import axios from "axios";

import {
  useGetTopMoviesQuery,
  useGetAllMoviesQuery,
} from "../../../../redux/api/movies";

import { useGetUsersQuery } from "../../../../redux/api/users";
import RealTimeCard from "./RealTimeCard";
import { useEffect } from "react";

const Main = () => {
  const { data: topMovies } = useGetTopMoviesQuery();
  const { data: visitors } = useGetUsersQuery();
  const { data: allMovies } = useGetAllMoviesQuery();

  const totalCommentsLength = allMovies?.map((m) => m.numReviews);
  const sumOfCommentsLength = totalCommentsLength?.reduce(
    (acc, length) => acc + length,
    0
  );

  //

  return (
    <div>
      <section className="flex justify-around">
        <div className="ml-[14rem] mt-10">
          <div className="-translate-x-4 flex">
            <SecondaryCard
              pill="Users"
              content={visitors?.length}
              info="18.8k more then usual"
              gradient="from-teal-500 to-lime-400"
            />
            <SecondaryCard
              pill="Comments"
              content={sumOfCommentsLength}
              info="544.2 more then usual"
              gradient="from-[#CCC514] to-[#CDCB8E]"
            />
            <SecondaryCard
              pill="Movies"
              content={allMovies?.length}
              info="372+ more then usual"
              gradient="from-green-500 to-lime-400"
            />
          </div>
          <div className=" grid grid-cols-3 mx-16 w-[90%] text-white mt-10 font-bold">
            <p >Top Content</p>
            <p className="flex justify-around">Rating</p>
            <p className="flex justify-around">Comments</p>
          </div>

          {topMovies?.map((movie) => (
            <VideoCard
              key={movie._id}
              image={movie.image}
              title={movie.name}
              date={movie.year}
              rating={Math.round(movie.rating*10)/10}
              comments={movie.numReviews}
            />
          ))}
        </div>

        <div>
          <RealTimeCard />
        </div>
      </section>
    </div>
  );
};

export default Main;