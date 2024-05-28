import React from 'react';
import './Projects.css'

const Content = ({ number, heading, description, link }) => {
    return (
        <div className='text'>
            <h2><span>{number}. {heading}</span></h2>
            <p>{description}<a className="link-display" href={link} target="_blank">Click Here</a> to view.</p>
            <br />
        </div>
    );
};

export default Content;
