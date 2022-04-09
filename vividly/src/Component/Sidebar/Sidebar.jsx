import React from "react";
import { genres } from "../../Services/fakeGenre";

const Sidebar = ({ onFilter, idProps, textProps, selectedItem }) => {
  return (
    <div className="mt-5 mr-5">
      <ul className="list-group">
        {genres.map((g) => (
          <li
            style={{ cursor: "pointer" }}
            className={
              g === selectedItem ? "list-group-item active" : "list-group-item"
            }
            key={g[idProps]}
            onClick={() => onFilter(g)}
          >
            {g[textProps]}
          </li>
        ))}
      </ul>
    </div>
  );
};

Sidebar.defaultProps = {
  idProps: "_id",
  textProps: "name",
};
export default Sidebar;
