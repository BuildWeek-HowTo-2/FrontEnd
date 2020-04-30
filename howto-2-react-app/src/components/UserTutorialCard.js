import React from "react";
import styled from "styled-components"

const Card = styled.div`
  width: 25%;
  margin: 2%;
  background: lightgrey;
  border-radius: 5%;
  background-color: lightgrey;
  opacity: 80%;
  // border: 1px solid black;
  border-style: outset;
`
// const Image = styled.img`
//   max-width: 100%;
//   border-radius: 5% 5% 0% 0%;  
// `
const CardTitle = styled.h1`
  max-width: 100%;
  max-height: 100%;
  background: white;
  font-size: 16px;
  padding: 4%;
  border: 1px 0px 1px 0;
  border-top: 1px solid black;
  border-bottom: 2px solid black;
  text-align: center;
`
const CardP = styled.p`
  color: black;
  font-size: 14px;
  text-align: center;
  font-weight: bold;
`



const UserTutorialCard = props => {
  // const { id, title, summary, likes, instructor_id}
  return (
    <Card className="tutorial-list " key={ props.id }>
      {/* <Image src = { image } alt = { name }/> */}
      <CardTitle>{ props.title }</CardTitle>
      <CardP>Summary: { props.summary }</CardP>
      <CardP>Likes: { props.likes }</CardP>
      <CardP>Instructor ID: { props.instructor_id }</CardP>
    </Card>


    
  // <div className="tutorial-list " key={props.id}>
  //   <h3>{props.title}</h3>
  //   <p>Summary: {props.summary}</p>
  //   <p>Likes: {props.likes}</p>
  //   <p>Instructor ID: {props.instructor_id}</p>      
  // </div>

  );
};

export default UserTutorialCard;