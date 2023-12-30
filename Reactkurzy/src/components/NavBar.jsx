import React from 'react';


export function NavBar() {
    return (
        <div>
            <div className="navbar">
                <img src="./src/assets/cap.png" alt="React Image" className="imgcap"/>
                <div><b>Courses</b></div>
                <div>Speakers</div>
                <div>Locations</div>

            </div>
            <hr/>
        </div>
    );
}