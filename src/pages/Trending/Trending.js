import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import CustomPagination from "../../component/Pagination/CustomPadination";
import SingleContent from "../../component/SingleContent/SIngleContent";
import './trending.css'

const Trending = () => {
    const [content, setContent] = useState([]); 
    const [page, setPage] = useState(1);

    const fetchTrending = async () => {
    const { data } = await axios.get(
      `
https://api.themoviedb.org/3/trending/all/week?api_key=48483e5ca88eb51749adb690410eb186&page=${page}`
    );

    // console.log(data.results);
    setContent(data.results);
  };

  useEffect(() => {
    fetchTrending();
    // eslint-disable-next-line
  }, [page]);

  return (
    <div>
      <span className="pageTitle">Trending page</span>
      <div className="trending">
        {content &&
          content.map((item) => (
            <SingleContent
              key={item.id}
              id={item.id}
              poster={item.poster_path}
              title={item.title || item.name}
              date={item.first_air_date || item.release_date}
              media_type ={item.media_type}
              vote_average ={item.vote_average}
            />
          ))}
      </div>
      <CustomPagination setPage={setPage} />
    </div>
  );
};

export default Trending;
