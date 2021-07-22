import { BrowserRouter, Route, Switch  } from 'react-router-dom';
import './App.css';
import Header from './component/header/Header';
import SimpleBottomNavigation from './component/navbar/Navbar';
import Container from '@material-ui/core/Container';
import Trending from './pages/Trending/Trending';
import Movies from './pages/Movies/Movies';
import Series from './pages/Series/Series';
import Search from './pages/Search/Search';


function App() {
  return (
    <BrowserRouter>
        <Header />
        <div className="app">
          <Container maxWidth="md">
            <Switch>
              <Route path="/" component={Trending} exact />
              <Route path="/movies" component={Movies} />
              <Route path="/series" component={Series} />
              <Route path="/search" component={Search} />
            </Switch>
          </Container>
        </div>
        <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
