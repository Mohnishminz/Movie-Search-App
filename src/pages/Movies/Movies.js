import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import CustomPagination from '../../component/Pagination/CustomPadination';
import SingleContent from '../../component/SingleContent/SIngleContent';
import Genres from "../../component/Genres/Genres"
import useGenre from '../../Hooks/useGenres';


const Movies = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  const [selectGenres, setSelectGenres] = useState([]);
  const [genres, setGenres] = useState([]);
  const getGenreUrl = useGenre(selectGenres);


  const fetchMovies = async () => {
    const { data } = await axios.get(`
https://api.themoviedb.org/3/discover/movie?api_key=48483e5ca88eb51749adb690410eb186&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${getGenreUrl}`);
    // &with_genres=${genreForUrl}
    // console.log(data);

    setContent(data.results);
    setNumOfPages(data.total_pages);

  };


  useEffect(() => {
    fetchMovies();
    // eslint-disable-next-line
  }, [page, getGenreUrl]);



    return (
      <div>
        <span className="pageTitle">Discover Movies</span>
        <Genres
          type="movie"
          selectGenres={selectGenres}
          setSelectGenres={setSelectGenres}
          genres={genres}
          setGenres={setGenres}
          setPage={setPage}
        />
        <div className="trending">
          {content &&
            content.map((item) => (
              <SingleContent
                key={item.id}
                id={item.id}
                poster={item.poster_path}
                title={item.title || item.name}
                date={item.first_air_date || item.release_date}
                media_type="movie"
                vote_average={item.vote_average}
              />
            ))}
        </div>
        {numOfPages > 1 && (
          <CustomPagination setPage={setPage} numberOfPages={numOfPages} />
        )}
      </div>
    );
}

export default Movies
