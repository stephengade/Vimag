import React, { Component } from "react";

class TableHeader extends Component {
  raiseSort = (path) => {
    const newSorting = { ...this.props.sortColumn };
    if (newSorting.tableColumn === path)
      newSorting.order = newSorting.order === "asc" ? "desc" : "asc";
    else {
      newSorting.tableColumn = path;
      newSorting.order = "asc";
    }
    this.props.onSort(newSorting);
  };

  showSortIcon = (column) => {
    if (column.path !== this.props.sortColumn.tableColumn) return null;
    if (this.props.sortColumn.order === "asc")
      return <i className="fa fa-sort-asc" aria-hidden="true"></i>;
    return <i className="fa fa-sort-desc" aria-hidden="true"></i>;
  };

  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map((column) => (
            <th
              key={column.path || column.key}
              onClick={() => this.raiseSort(column.path)}
              style={{ cursor: "pointer" }}
            >
              {column.label} {this.showSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
