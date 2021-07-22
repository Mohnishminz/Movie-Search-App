import { Chip } from "@material-ui/core";
import axios from "axios";
import React, { useEffect } from "react";

const Genres = ({
  setPage,
  setGenres,
  genres,
  setSelectGenres,
  selectGenres,
  type,
}) => {
  const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=48483e5ca88eb51749adb690410eb186&language=en-US`
    );

    // setGenres(data.genres);
    console.log(data);
    setGenres(data.genres);
  };

  useEffect(() => {
    fetchGenres();

    return () => {
      setGenres({});
    };
    // eslint-disable-next-line
  }, []);

  const handleAdd = (genre) => {
    setSelectGenres([...selectGenres, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id));
    setPage(1);
  };

  const handleRemove =(genre) =>{
      setSelectGenres(
        selectGenres.filter((selected) => selected.id !== genre.id)
      );
      setGenres([...genres, genre]);
      setPage(1);
  }

  return ( 
    <div style={{ padding: "6px 0" }}>
      {selectGenres &&
        selectGenres.map((genre) => (
          <Chip
            onDelete ={()=> handleRemove(genre)}
            label={genre.name}
            style={{ margin: 2 }}
            size="small"
            color="primary"
            key={genre.id}
            clickable
          />
        ))}
      {genres &&
        genres.map((genre) => (
          <Chip
            onClick={() => handleAdd(genre)}
            label={genre.name}
            style={{ margin: 2 }}
            size="small"
            key={genre.id}
            clickable
          />
        ))}
    </div>
  );
};

export default Genres;
