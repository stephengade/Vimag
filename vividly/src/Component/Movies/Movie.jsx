import React, { Component } from "react";
import { getMovies } from "../../Services/fakeMovie";
import Pagination from "../Misc/Pagination";
import { getGenres } from "../../Services/fakeGenre";
import "./Movie.css";
import MovieTable from "./MovieTable";
import Sidebar from "../Sidebar/Sidebar";
import lodash from "lodash";

export class Movie extends Component {
  // Store all movies in state
  state = {
    movies: [],
    genre: [],
    pageSize: 3,
    activePage: 1,
    sortColumn: { tableColumn: "title", order: "asc" },
  };

  componentDidMount() {
    const genre = [{ name: "All" }, ...getGenres()];

    this.setState({
      movies: getMovies(),
      genre: genre,
    });
  }

  // handle genre filter

  handleGenreFilter = (genre) => {
    this.setState({ selectedGenre: genre, activePage: 1 });
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

  // handleSort

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  // Render

  render() {
    // Getting number of movies in State
    // const totalMovie = this.state.movies.length;
    const {
      pageSize,
      activePage,
      liked,
      movies,
      genres,
      selectedGenre,
      sortColumn,
    } = this.state;

    const filterAll =
      selectedGenre && selectedGenre._id
        ? movies.filter((g) => g.genre._id === selectedGenre._id)
        : movies;

    const TableSort = lodash.orderBy(
      filterAll,
      [sortColumn.tableColumn],
      [sortColumn.order]
    );

    // If totalMovie is 0, then display message
    if (filterAll.length === 0) {
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
              Showing {filterAll.length} movies in the database
            </h2>
            {/* Table Started */}

            <MovieTable
              onDelete={this.handleDelete}
              likeState={liked}
              onLike={this.handleReaction}
              currentPage={activePage}
              pageSize={pageSize}
              tableSort={TableSort}
              sortColumn={sortColumn}
              onSort={this.handleSort}
            />

            <Pagination
              movieCount={filterAll.length}
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
