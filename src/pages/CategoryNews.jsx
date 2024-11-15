import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard/NewsCard";

const CategoryNews = () => {
  const { data: news } = useLoaderData();
  return (
    <div>
      <h2 className="font-semibold">Dragon News Home</h2>
      <p className="text-gray-500 text-sm">{news.length} News Found in this category</p>
      <div className="flex flex-col gap-4">
        {
            news.map(singleNews => <NewsCard key = {singleNews._id} news={singleNews}></NewsCard>)
        }
      </div>
    </div>
  );
};

export default CategoryNews;
