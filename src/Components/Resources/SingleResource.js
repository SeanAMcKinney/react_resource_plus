import React from "react";

export default function SingleResource(props) {
  return (
    <div className="singleResource col-md-5 m-4">
      <h3>{props.resource.Name}</h3>
      {props.resource.Description !== null ? (
        <p>{props.resource.Description}</p>
      ) : (
        <p>No Description Provided</p>
      )}
      <a href={props.resource.Url} tartet="_blank" rel="noreferrer" className="btn btn-info">
        Visit {props.resource.LinkText}
      </a>
    </div>
  );
}
