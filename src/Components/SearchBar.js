import React, { Component } from 'react'

export default class SearchBar extends Component {

    handleSubmit = (event) => {
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-row mb-5 mt-2 shadow-lg">
                        <div className="col-lg-12">
                            <input 
                            onChange={this.props.SearchMovieProp} 
                            type="text" 
                            className="form-control" 
                            placeholder="Search a Movie" 
                            />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
