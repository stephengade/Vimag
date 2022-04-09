import React from "react";

const Reaction = ({hasLike, onClick}) => {
  let like_class = "fa fa-heart";
  let unlike_class = "fa fa-heart-o";

  return (
    <i
      className={hasLike ? like_class : unlike_class}
      aria-hidden="true"
      onClick={onClick}
      style={{ cursor: "pointer" }}
    />
  );
};

export default Reaction;
