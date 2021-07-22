import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SearchIcon from '@material-ui/icons/Search';
import TvIcon from '@material-ui/icons/Tv';
import MovieCreationIcon from '@material-ui/icons/MovieCreation';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    
    position:"fixed",
    bottom: 0,
    backgroundColor: "#e27e70",
    boxShadow: "0.5px 0px 10px black",
    width: "100%"
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history= useHistory();


  useEffect(() => {
    if (value === 0) history.push("/");
    else if (value === 1) history.push("/movies");
    else if (value === 2) history.push("/series");
    else history.push("/search");


  }, [value,history])


  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction style={{color: 'white'}} label="Trending" icon={<WhatshotIcon />} />
      <BottomNavigationAction style={{color: 'white'}} label="Movies" icon={<MovieCreationIcon />} />
      <BottomNavigationAction style={{color: 'white'}} label="TV Series" icon={<TvIcon />} />
      <BottomNavigationAction style={{color: 'white'}} label="Search" icon={<SearchIcon />} />
    </BottomNavigation>
  );
}