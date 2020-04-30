import React, { useEffect, useState } from "react";
import axios from "axios";
import UserTutorialCard from "./UserTutorialCard";
import styled from "styled-components"

const ListContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
`
const SearchForm = styled.form`
  width: 100%;
  height: 100%;
  text-align: center;
  margin: 1% 35%;
  font-size: 2rem;
  border: none;
`

// _________________Working code below....___________________

export default function UserTutorialList() {
  // NOTE: The value given to setState() must be of the same type as your vale is expected to be
  
  const [tutorials, setTutorials] = useState([]);
  
  const [ query, setQuery ] = useState("")

useEffect(() => {
    axios
      .get(`https://how2s.herokuapp.com/api/tutorials`, {params: {}
    })
      .then(response => {
      
        console.log(response.data);
        const tutorials = response.data.filter(tutorial => tutorial.title.toLowerCase().includes(query.toLowerCase())
        );
        setTutorials(tutorials);
      })
      .catch(error => {
        console.log("failure, the tutorial list not returned", error);
      });
  }, [query]);

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  return (
    
    <ListContainer className="tutorial">
    
      <SearchForm className="search">
        <input
          type="text"
          onChange={handleInputChange}
          value={query}
          name="title"
          tabIndex="25"
          placeholder="search by title"
          autoComplete="off"
        />
      </SearchForm>
      
        {tutorials.map(tutorial => {
          return (
            <UserTutorialCard
            key={tutorial.id}
            title={tutorial.title}
            summary={tutorial.summary}
            likes={tutorial.likes}
            instructor_id={tutorial.instructor_id}
            />      
          )
        })
      }
    </ListContainer>
  );
}