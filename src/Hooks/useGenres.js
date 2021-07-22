const useGenre = (selectGenres) => {
     if (selectGenres.length < 1) return "";

  const GenreIds = selectGenres.map((g) => g.id);
  return GenreIds.reduce((acc, curr) => acc + "," + curr);
};

export default useGenre;
