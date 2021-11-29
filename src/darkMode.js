import React from 'react';
import Darkmode from "darkmode-js";

new Darkmode({label: '🌓'}).showWidget();

const DarkMode = () => {
    return (
        <>
            <span className="darkmode-ignore"></span>
        </>
    );
}

export default DarkMode;

