import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";


const MovieDetails = props => {
const [movie, setMovie] = useState([]);
const { movieID } = useParams();

useEffect(() => {
const REACT_API_KEY = `7977679c4986962c63063542a749f010`;
const axios = require("axios").default;

axios
.get(
`https://api.themoviedb.org/3/movie/${movieID}?api_key=${REACT_API_KEY}`
)
.then(response => {
setMovie(response.data);
})
.catch(error => console.log(error));

axios
.get(
`https://api.themoviedb.org/3/movie/${movieID}?api_key=${REACT_API_KEY}`
)
}, []);


return (

<div className="container px-4">
    <div className="col-sm-8 offset-sm-2">
        <nav aria-label="breadcrumb" className="my-3">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                    {movie.title}
                </li>
            </ol>
        </nav>
        <div className="card mb-4 shadow-sm">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="w-100 mb-5 card-img-top"
                alt="..." />
            <div className="card-body">
                <h3 className="card-title text-center text-info">{movie.title}</h3>
                <h2 className="text-center mt-2 text-danger">Overview</h2>
                <p className="card-text text-center font-weight-bold">{movie.overview}</p>
                <p>
                    <Link to="/">
                    <button type="button" className="btn btn-md
                        btn-outline-info float-left ml-4 mt-3">Home</button>
                    </Link>
                    <h2><span className="badge badge-success btn-light float-right mr-4 mt-3">{movie.vote_average}</span>
                    </h2>
                </p>
            </div>
        </div>
        <hr />
    </div>
    <h3 className="text-center text-danger">Bu Filme Benzeyenler</h3>   
</div>
);
};
export default MovieDetails;