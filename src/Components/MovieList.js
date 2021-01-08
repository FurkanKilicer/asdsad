import React from 'react';
import { Link } from "react-router-dom";


function MovieList(props) {

return (
<div className="container">
    <div className="row">
        {props.movies.map((moviess) =>

        <div className="col-lg-4" key={moviess.id}>
            <div className="card mb-4 shadow-sm">
                <img src={`https://image.tmdb.org/t/p/w500/${moviess.poster_path}`}
                    className="card-img-top" alt="Search Top İmg" />
                <div className="card-body">
                    <h5 className="card-title">{moviess.title}</h5>
                    <p className="card-text">{moviess.overview.slice(0, 210) + ".."}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <button type="button" onClick={(event)=> props.deleteMovieProp(moviess)} className="btn btn-md
                            btn-outline-danger">Delete</button>
                        <Link to={`/popular/${moviess.id}`} className="btn btn-outline-info mr-3">
                        Details
                        </Link>
                        <h2><span className="badge badge-info btn-success">{moviess.vote_average}</span></h2>
                    </div>
                </div>
            </div>
        </div>

        )}
    </div>
</div>
)
}


export default MovieList;