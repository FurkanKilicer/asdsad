import React from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import axios from 'axios';
import Details from './Details';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {

state = {
movies: [],

searchQuery: '',

}

async componentDidMount() {
const response = await
axios.get("https://api.themoviedb.org/3/movie/popular?api_key=7977679c4986962c63063542a749f010&language=en-US&page=1");
this.setState({ movies: response.data.results });
}

deleteMovie = async (movie) => {
axios.delete(`https://image.tmdb.org/t/p/w220_and_h330_face/${movie.id}`);
const newDeleteMovies = this.state.movies.filter(
m => m.id !== movie.id);


this.setState(state => ({
movies: newDeleteMovies
}))
}

searchMovie = (event) => {
this.setState({ searchQuery: event.target.value })
}


render() {

let filteredMovies = this.state.movies.filter(
(movie) => {

return movie.title.indexOf(this.state.searchQuery) !== -1;
}
)

return (
<Router>
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <SearchBar SearchMovieProp={this.searchMovie} />
            </div>
        </div>
    </div>
    <Switch>
        <Route exact path="/">
            <MovieList movies={filteredMovies} deleteMovieProp={this.deleteMovie} />
        </Route>
        <Route path={`/popular/:movieID`}>
            <Details deleteMovieProp={this.deleteMovie} />
        </Route>


    </Switch>
</Router>
)
}
}

export default App;