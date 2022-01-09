import React from "react";

const Reaction = (props) => {
  let like_class = "fa fa-heart";
  let unlike_class = "fa fa-heart-o";

  return (
    <i
      className={props.hasLike ? like_class : unlike_class}
      aria-hidden="true"
      onClick={props.onClick}
      style={{ cursor: "pointer" }}
    />
  );
};

export default Reaction;
