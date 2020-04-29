import React from "react";

const UserTutorialCard = props => {
  return (
    <div className="tutorial-list " key={props.id}>
      <h3>Tutorial title: {props.title}</h3>
      <p>Summary: {props.summary}</p>
      <p>Likes: {props.likes}</p>
      <p>Instructor ID: {props.instructor_id}</p>
    </div>
  );
};
export default UserTutorialCard;