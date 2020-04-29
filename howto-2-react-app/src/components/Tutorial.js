import React from 'react';

const Tutorial = ({step}) => {
    return (
        <div>
            {step.step_number}
            {step.instructions}
        </div>
    )

}

export default Tutorial