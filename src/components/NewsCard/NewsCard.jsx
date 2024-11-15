import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FaRegEye, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";


const NewsCard = (props = {}) => {
 const {news} = props || {};
  return (
    <div className=" flex flex-col gap-4 p-4 bg-white rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <img
          className="w-10 h-10 rounded-full mr-3"
          src={news.author.img}
          alt=""
        />
        <div>
        <p className="font-semibold">{news.author.name || 'name'}</p>
        <p className="text-sm text-gray-500">{news.author.published_date}</p>
      </div>
      <div className="ml-auto">
          <FaShareAlt className="text-gray-600" />
        </div>
      </div>
      <h2 className="text-xl font-semibold mb-2">{news.title}</h2>
      <img src={news.image_url} className="w-full object-cover object-left-top rounded-lg mb-4" alt="" />
      <p>{news.details.slice(0, 150)}...{" "}  <Link  to ={`/news/${news._id}`} className="text-primary">Read More</Link></p>
      <div className="flex items-center justify-between text-gray-600 text-sm">
        {/* Rating */}
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <AiFillStar
              key={i}
              className={`text-yellow-500 ${
                i < Math.round(news.rating.number) ? "" : "opacity-50"
              }`}
            />
          ))}
          <span className="ml-2 font-semibold">{news.rating.number}</span>
        </div>

        {/* Views */}
        <div className="flex items-center">
          <FaRegEye className="mr-1" />
          <span>{news.total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
