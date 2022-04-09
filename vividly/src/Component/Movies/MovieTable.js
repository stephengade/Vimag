import React, { Component } from "react";
import Reaction from "../Misc/Reaction";
import { Paginator } from "../../Utils/paginate";

export class MovieTable extends Component {
 
  render() {
    const {
      onDelete,
      allMovies,
      currentPage,
      pageSize,
      selectedGenre,
    } = this.props;

    const total_likes_style = {
      fontSize: "10px",
      alignSelf: "center",
      fontWeight: "900",
    };

   const filtered = selectedGenre
      ? allMovies.filter((g) => g.this.props.genred._id === selectedGenre._id)
      : allMovies;

    const pageMovies = Paginator(filtered, currentPage, pageSize);

    return (
      <>
        {pageMovies.map((movie) => {
          return (
            <tr key={movie._id} className="movie_row">
              <td className="movie movie_title">{movie.title}</td>
              <td className="movie movie_genre">{movie.genre.name}</td>
              <td className="movie movie_stock">{movie.numberInStock}</td>
              <td className="movie movie_rate">{movie.dailyRentalRate}</td>
              <td className="movie movie_like" style={{ display: "flex" }}>
                <Reaction
                  hasLike={movie.liked}
                  onClick={() => this.props.onLike(movie)}
                />{" "}
                <span className="total_likes ml-2" style={total_likes_style}>
                  {movie.liked}
                </span>
              </td>

              <td className="movie movie_button">
                <button
                  className="btn btn-success btn-sm"
                  onClick={() => onDelete(movie)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </>
    );
  }
}

export default MovieTable;
