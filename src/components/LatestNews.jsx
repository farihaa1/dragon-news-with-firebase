import React from 'react';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
const LatestNews = () => {
    return (
        <div className='flex gap-2 items-center bg-base-300 p-2 my-5'>
            <p className='bg-[#D72050] text-base-100 px-3 py-1 text-lg'>Latest</p>
            <Marquee pauseOnHover={true} className='space-x-10'>
                <Link className='text-md' to='/news'>
                Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;