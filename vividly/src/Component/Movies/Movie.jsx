import React, { Component } from "react";
import { getMovies } from "../../Services/fakeMovie";
import "./Movie.css";
import MovieTable from "./MovieTable";

export class Movie extends Component {
  // Store all movies in state
  state = {
    movies: getMovies(),
    liked: true,
  };

  // Using Filter to delete movie
  handleDelete = (movie) => {
    const otherMovies = this.state.movies.filter((n) => n._id !== movie._id);
    this.setState({ movies: otherMovies });
  };

  // handle like reaction

  handleReaction = (mv) => {
    const allMovies = [...this.state.movies];
    const findMovie = allMovies.indexOf(mv);
    allMovies[findMovie] = { ...allMovies[findMovie] };
    allMovies[findMovie].liked = !allMovies[findMovie].liked;
    this.setState({ movies: allMovies });
  };

  // Render

  render() {
    // Getting number of movies in State
    const totalMovie = this.state.movies.length;

    // If totalMovie is 0, then display message
    if (totalMovie === 0) {
      return (
        <>
          <h2 className="mt-5 text-center">No Movie Again!</h2>
          <p className="lead text-dark text-center">
            You have deleted everything, peacefully😏
          </p>
        </>
      );
    }

    // If total movie is not 0, then display table
    return (
      <div className="container movie_wrapper">
        <div className="row">
          <div className="col-12 movie_column">
            <h2 className="table_title">
              Showing {totalMovie} movies in the database
            </h2>
            {/* Table Started */}

            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Genre</th>
                  <th scope="col">Stock</th>
                  <th scope="col">Rate</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                <MovieTable
                  allMovies={this.state.movies}
                  onDelete={this.handleDelete}
                  likeState={this.state.liked}
                  onLike={this.handleReaction}
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Movie;
