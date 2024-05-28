import React from 'react'
import './Skills.css'
import Block from './Block'

const Skills = () => {

    const skills = [
        { name: 'HTML', className: 'html' },
        { name: 'CSS', className: 'css' },
        { name: 'JAVASCRIPT', className: 'javascript' },
        { name: 'SQL', className: 'sql' }
    ];
    
    const programmingLanguages = [
        { name: 'JAVA PROGRAMMING', className: 'java' },
        { name: 'C PROGRAMMING', className: 'c' },
        { name: 'EMBEDDED C (Basics)', className: 'embedded-c' }
    ];
    
    return (
        <div className="skills-text">
            <h1><span>Skills</span></h1>
            <hr />
            <div className="main">
                <div className="sub-title">
                    <Block title= "Web Development" skills={skills} />
                </div>
                <div className="sub-title">
                    <Block title="Programming Languages" skills={programmingLanguages} />
                </div>
            </div>
        </div>
    )
}

export default Skills
