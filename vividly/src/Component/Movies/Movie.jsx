import React, { Component } from "react";
import { getMovies } from "../../Services/fakeMovie";
import Pagination from "../Misc/Pagination";
import { getGenres } from "../../Services/fakeGenre";
import "./Movie.css";
import MovieTable from "./MovieTable";
import Sidebar from "../Sidebar/Sidebar";

export class Movie extends Component {
  // Store all movies in state
  state = {
    movies: [],
    genres: [],
    pageSize: 3,
    activePage: 1,
  };

  componentDidMount() {
    this.setState({ movies: getMovies(), genres: getGenres() });
  }

  // handle genre filter

  handleGenreFilter = (genre) => {
    this.setState({ selectedGenre: genre });
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

  // handlePageChange

  handlePageChange = (p) => {
    this.setState({ activePage: p });
  };

  // Render

  render() {
    // Getting number of movies in State
    const totalMovie = this.state.movies.length;
    const { pageSize, activePage, liked, movies, genres, selectedGenre } =
      this.state;

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
          <div className="col-3">
            <Sidebar
              selectedItem={selectedGenre}
              list={genres}
              onFilter={this.handleGenreFilter}
            />
          </div>
          <div className="col-8 movie_column">
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
                  allMovies={movies}
                  onDelete={this.handleDelete}
                  likeState={liked}
                  onLike={this.handleReaction}
                  currentPage={activePage}
                  pageSize={pageSize}
                  selectedGenre={selectedGenre}
                  genred={genres}
                />
              </tbody>
            </table>

            <Pagination
              movieCount={totalMovie}
              pageSize={pageSize}
              onPageChange={this.handlePageChange}
              currentPage={activePage}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Movie;
