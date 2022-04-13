import React from 'react'
import TableHeader from './TableHeader'
import TableBody from './TableBody'


const Table = ({column, row, sortColumn, onSort, onDelete, pageMovies})=> {
  return (
    <table className="table">
    <TableHeader
      columns={column}
      sortColumn={sortColumn}
      onSort={onSort}
      row={row}
    />

    <TableBody
      onDelete={onDelete}
      row={pageMovies}
      columns={column}
    />
  </table>
  )
}

export default Table