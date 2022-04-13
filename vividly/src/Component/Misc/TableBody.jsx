import React, { Component } from "react";
import lodash from "lodash";

export const Button = ({ onDelete, movie }) => {
  const btn = (
    <button className="btn btn-success btn-sm" onClick={() => onDelete(movie)}>
      Delete
    </button>
  );

  return btn;
};

export class TableBody extends Component {
  showItems = (item, column) => {
    if (column.content) return column.content(item);

    return lodash.get(item, column.path);
  };
  render() {
    const { row, columns } = this.props;

    return (
      <tbody>
        {row.map((item) => (
          <tr key={item._id}>
            {columns.map((column) => (
              <td key={column.path || column.key}>
                {this.showItems(item, column)}
              </td>
            ))}
          </tr>
        ))}

        {/* {pageMovies.map((movie) => {
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
        })} */}
      </tbody>
    );
  }
}

export default TableBody;
