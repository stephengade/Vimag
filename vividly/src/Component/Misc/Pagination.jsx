/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from "prop-types";
import lodash from "lodash";

const Pagination = ({ movieCount, pageSize, onPageChange, currentPage }) => {
  const pagesCount = movieCount / pageSize;
  if (Math.ceil(pagesCount) === 1) return null;
  const pages = lodash.range(1, pagesCount + 1);

  console.log(currentPage);

  return (
    <nav className="ml-2 flex">
      <ul className="pagination">
        {pages.map((allPages) => (
          <li
            key={allPages}
            className={
              allPages === currentPage ? `page-item active` : "page-item"
            }
          >
            <a
              className="page-link"
              style={{ cursor: "pointer" }}
              onClick={() => onPageChange(allPages)}
            >
              {allPages}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  movieCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired
};

export default Pagination;
