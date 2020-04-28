import React from 'react';
import { Link } from 'react-router-dom'

const OnboardOption = () => {
    return (
        <div>
            <Link to='/user/register'>
            <button>Create User Account</button>
            </Link>
            <Link to='/instructor/register'>
            <button>Create Instructor Account</button>
            </Link>
        </div>
    )
}

export default OnboardOption