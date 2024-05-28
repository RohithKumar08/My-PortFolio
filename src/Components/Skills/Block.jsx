import React from 'react'
import './Skills.css'

const Block = ({title, skills}) => {
    return (
        <>
        <h2 className='skill'>{title}</h2>
        <div className="block">
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>
                    <h2>{skill.name}</h2>
                    <div className="bar">
                        <span className={skill.className}></span>
                    </div>
                    </li>
                ))}
            </ul>     
        </div>
        
        </>
    )
}

export default Block

