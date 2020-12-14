import React from "react";
import { Link } from "react-router-dom";

const Preview = (props) => {
  return (
    <Link to={{ pathname: props.link }} className="col-md-6 preview-item">
      <figure>
        <img className="img-fluid" src={props.image} alt="v1-beispiel" />
      </figure>
      <div className="info">
        <h4>{props.title}</h4>
        <p>{props.description}</p>
      </div>
    </Link>
  );
};

export default Preview;
