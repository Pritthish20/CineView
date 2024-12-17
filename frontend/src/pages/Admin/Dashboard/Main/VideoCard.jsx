import star from "../../../../assets/star.svg";

const VideoCard = ({ image, title, date, rating, comments }) => {
  return (
    <>
      <div className="grid grid-cols-3 w-[90%] mt-5">
        <div className="flex">
          <div>
            <img src={image} alt="Card Image" className="h-[3rem]" />
          </div>

          <div className="ml-4">
            <h2 className="text-lg text-white">{title}</h2>
            <p className="text-gray-500 mb-3">{date}</p>
          </div>
        </div>
        <div className="flex-auto mb-5 mr-7 flex justify-end items-center">
          {rating}
          <img src={star} alt="" className="w-4 ml-2" />
        </div>

        <div className="flex-grow mb-5 mr-10 flex justify-end items-center">
          <div className="text-white text-lg">{comments}</div>
        </div>
      </div>
    </>
  );
};

export default VideoCard;
