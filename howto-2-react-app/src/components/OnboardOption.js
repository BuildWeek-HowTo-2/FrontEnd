import React from 'react';
import { Link } from 'react-router-dom'
const OnboardOption = () => {
    return (
        <div className="OnboardOptionsDiv">
            <Link className="OnboardOptionButtons" to='/user/login'>
            <button>User Account</button>
            </Link>
            <Link className="OnboardOptionButtons" to='/instructor/login' >
            <button>Instructor Account</button>
            </Link>
        </div>
    )
}

export default OnboardOption