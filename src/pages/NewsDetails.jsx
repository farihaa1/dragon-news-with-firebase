import React from "react";
import Header from "../components/Header";
import RightNavbar from "../components/asideComponents/RightNavbar";
import { Link, useLoaderData } from "react-router-dom";

const NewsDetails = () => {
  const data = useLoaderData();
  const news = data.data[0];
  console.log(news);
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12 gap-2 lg:gap-5">
        <section className="col-span-9">
          <h2 className="font-semibold mb-3">Dragon News</h2>



          <div className="card bg-base-100">
            <figure className="px-4 pt-4">
              <img
                src={news?.image_url}
                
                className="rounded-xl"
              />
            </figure>
            <div className="card-body p-3 py-8">
              <h2 className="card-title">{news.title}</h2>
              <p>{news.details}</p>
              <div className="card-actions">
                <Link to={`/category/${news?.category_id}`} className="btn btn-neutral text-white border-none">Back To Category</Link>
              </div>
            </div>
          </div>



        </section>
        <aside className="col-span-3">
          <RightNavbar></RightNavbar>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
