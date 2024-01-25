import React from "react";

const Container = (props) => {
  return (
    <div className="card">
      <div className="card-body ">{[props.children]}</div>
    </div>
  );
};

export default Container;
