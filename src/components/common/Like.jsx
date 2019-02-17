import React from "react";

const Like = ({ isFav, onClick }) => {
  let classes = "fa fa-heart";
  if (!isFav) {
    classes += "-o";
  }
  return (
    <i
      onClick={onClick}
      style={{ cursor: "pointer" }}
      className={classes}
      aria-hidden="true"
    />
  );
};

export default Like;
