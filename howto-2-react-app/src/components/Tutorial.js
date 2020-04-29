import React from 'react';

const Tutorial = ({tutorial}) => {
    return (
        <div>
        {/* <h3>{step.step_number}</h3> <h3>{step.instructions}</h3> */}
        {tutorial.title}
        {tutorial.summary}
        {tutorial.likes}
        </div>
    )

}

export default Tutorial