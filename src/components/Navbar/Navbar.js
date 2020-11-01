import React from 'react';
import './Navbar.css';

function Navbar() {
    return (

        <div className="jumbotron mb-2">
            <h1 className="display-4 text-center">Employee Directory</h1>

            <hr className="my-4" />
            <p className="text-center">Enter the first name of the employee you seek below, and sort by their last name.</p>

        </div>
    )
}

export default Navbar;