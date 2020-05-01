import React from 'react';
import styled from 'styled-components';
const D = styled.div`
display:flex;

`
const P = styled.p`
  color: black;
  width:120px;
  padding:5px;
  font-size: 10px;
  font-weight: bold;
`


const Tutorial = ({tutorial}) => {
    return (
        <D>
        {/* <h3>{step.step_number}</h3> <h3>{step.instructions}</h3> */}
        <P>{tutorial.title}</P>
        <P>{tutorial.summary}</P>
        <P>{tutorial.instructor_id}</P>
        </D>
    )

}

export default Tutorial