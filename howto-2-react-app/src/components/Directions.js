import React from 'react';
import styled from "styled-components";
const D = styled.div`
display:flex;
`
const P = styled.p`
  color: black;
  width:20px;
  padding:5px;
  font-size: 20px;
  font-weight: bold;
`
const Directions = ({step}) => {
    return (
        <D>
        <P>{step.step_number}</P>
        <P>{step.instructions}</P>
        </D>
    )

}

export default Directions