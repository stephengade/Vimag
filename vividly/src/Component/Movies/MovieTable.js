/* eslint-disable no-const-assign */
import React, { Component } from "react";
import { Paginator } from "../../Utils/paginate";

import { Button } from "../Misc/TableBody";
import Reaction from "../Misc/Reaction";
import Table from "../Misc/Table";

export class MovieTable extends Component {
  column = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: (movie) => (
        <Reaction
          onClick={() => this.props.onLike(movie)}
          hasLike={movie.liked}
        />
      ),
    },
    {
      key: "delete",
      content: (movie) => (
        <Button onDelete={this.props.onDelete} movie={movie} />
      ),
    },
  ];

  render() {
    const { onDelete, currentPage, pageSize, sortColumn, onSort } = this.props;

    const pageMovies = Paginator(this.props.tableSort, currentPage, pageSize);

    return (
      <>
        <Table
          row={this.row}
          column={this.column}
          sortColumn={sortColumn}
          onDelete={onDelete}
          onSort={onSort}
          pageMovies={pageMovies}
        />
      </>
    );
  }
}

export default MovieTable;
