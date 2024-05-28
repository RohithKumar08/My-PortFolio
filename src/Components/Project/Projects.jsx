import React from 'react'
import './Projects.css'
import Content from './Content';

const Projects = () => {
        const projectData = [
                {
                    number: 1,
                    heading: 'Basic Calculator',
                    description: 'This is a simple project that does addition, subtraction, multiplication, and division and various simple operations such as backspace, clearing the screen, etc..',
                    link: 'https://rohithkumar08.github.io/Calculator/'
                },
                {
                    number: 2,
                    heading: 'Age Calculator',
                    description: 'This is a simple project that helps a user calculate his/her age. User is asked for an input and the website displays the age on the screen,',
                    link: 'https://rohithkumar08.github.io/Age_Calculator/'
                },
                {
                    number: 3,
                    heading: 'Tip Calculator',
                    description: 'This is a simple project that helps user calculate the bill and generates how much tip the customer should provide,',
                    link: 'https://rohithkumar08.github.io/Tip_Calculator/'
                },
                {
                    number: 4,
                    heading: 'NewsLetter Sign-Up Form',
                    description: 'This is a simple project that helps user to get notification when the user enters his / her email address for a particular news letter,',
                    link: 'https://rohithkumar08.github.io/newsletter-sign-up-form/'
                },
                {
                    number: 5,
                    heading: 'Article Preview Component',
                    description: 'This is a simple project that allows user to share a particular article in other social media applications such as Facebook, Pinterest, and Twitter(X), This project only holds One Article,',
                    link: 'https://rohithkumar08.github.io/newsletter-sign-up-form/'
                },
                {
                    number: 6,
                    heading: 'Multi-Step Form',
                    description: 'This is an advanced project that asks the user to fill several details and validates if the format of the inputs are proper and displays the choices the user has selected and displays it on the screen,',
                    link: 'https://rohithkumar08.github.io/multi-step-form/'
                },
                {
                    number: 7,
                    heading: 'Advice Generator',
                    description: 'This is a simple project which uses an API to generate various advices and motivations for the user whenever he or she clicks on the generate button,',
                    link: 'https://rohithkumar08.github.io/advice-generator/'
                },
                {
                    number: 8,
                    heading: 'Time Tracking Dashboard',
                    description: 'This is an intermediate project which tracks time of a user based on the time he spent either for a day or for a week or for a month and display the details accordingly with a clean and attractive styling,',
                    link: 'https://rohithkumar08.github.io/time-tracking-dashboard/'
                },
                {
                    number: 9,
                    heading: 'Centralized Street Light Fault Detection and Location Tracking',
                    description: 'This is a Hardware and Software integrated project. In this project, instead of raising a complaint regarding the fault in street lights, we can use LDR\'s that detect the light emitted and not emitted from street lights and update it in a website along with the location of the street lights,',
                    link: 'https://github.com/RohithKumar08/Centralized-Street-Light-Fault-Detection-and-Location-Tracking'
                },
                {
                    number: 10,
                    heading: 'Password Generator using React-JS',
                    description: 'This is a simple project which by default provides a password with random letters, we can customize the length of the password and also add or remove numbers or special characters if needed, with the use of clipboard API we can copy the generated password and use it in different location,',
                    link: 'https://github.com/RohithKumar08/Password-Generator-using-React-JS'
                },
                {
                    number: 11,
                    heading: 'Currency Converter using API call and React-JS',
                    description: 'This is a simple project takes a particular currency and a certain value as an input and converts it into the required currency. I have used an API to access various currencies for conversion,',
                    link: 'https://github.com/RohithKumar08/Currency-Converter-Using-API-and-React-JS'
                }
        ];
    return (
        <div id="Projects" className="project-text page">
            <h1><span>LeetCode</span></h1>
            <hr />
            <div>
                <p>This is the coding platform where I have worked on improving my Java Programming skills, <a
                        className="link-display" href="https://leetcode.com/Rohith_Kumar_Tetali/" target="_blank">Click Here</a> to view.
                </p>
            </div>
            <h1><span>Projects</span></h1>
            <hr />
            <div>
                {projectData.map((project, index) => (<Content
                key={index}
                number={project.number}
                heading={project.heading}
                description={project.description}
                link={project.link} />))}
            </div>
            
        </div>
    )
}

export default Projects
