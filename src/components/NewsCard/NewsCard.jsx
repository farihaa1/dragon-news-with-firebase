import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FaRegEye, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

// author
// :
// {name: 'system', published_date: '2022-08-27 05:38:02', img: 'https://images.unsplash.com/photo-1633332755192-72…HxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80'}
// category_id
// :
// "02"
// details
// :
// "Agencies | Washington The Daily Tribune – www.newsofbahrain.com The US President Joe Biden plans to appoint a general in Ukraine to lead the military training and relief efforts, the Wall Street Journal reported citing US officials. The officials indicated that in the coming weeks, the US administration also plans to name its military mission to support Ukraine. The name of the operation formally recognises US military support, akin to how the Pentagon dubbed the missions in Iraq and Afghanistan Operation Iraqi Freedom,   Enduring Freedom   and 'Guardian of Freedom'."
// image_url
// :
// "https://i.ibb.co/vz5K0FB/unsplash-Eh-Tc-C9s-YXsw-10.png"
// others_info
// :
// {is_todays_pick: false, is_trending: false}
// rating
// :
// {number: 4.5, badge: 'Excellent'}
// thumbnail_url
// :
// "https://i.ibb.co/dr4TRY4/unsplash-Eh-Tc-C9s-YXsw-21.png"
// title
// :
// "US commander to train Ukraine military"
// total_view
// :
// 552
// _id
// :
// "df11ff9feefc37613cc3a4486ce02151"
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
