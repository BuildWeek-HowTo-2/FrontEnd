import React, { useEffect, useState } from "react";
import axios from "axios";
import UserTutorialCard from "./UserTutorialCard";

export default function UserTutorialList() {
  // NOTE: The value given to setState() must be of the same type as your vale is expected to be
  const [tutorials, setTutorials] = useState([]);

useEffect(() => {
    axios
      .get(`https://how2s.herokuapp.com/api/tutorials`, {params: {}
    })
      .then(response => {
      
        console.log("success, tutorial list coming back", response.data);
        setTutorials(response.data);
      })
      .catch(error => {
        console.log("failure, the tutorial list not returned", error);
      });
  }, []);

  return (
    <div className="tutorial">
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
      })}
    </div>
  );
}