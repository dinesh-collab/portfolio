import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import react from '../assets/images/react.png';
import js from '../assets/images/js.png';
import angular from '../assets/images/Angular.png';
import aws from '../assets/images/aws.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://dinesh-collab.github.io/React/" target="_blank" rel="noreferrer"><img src={react} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://dinesh-collab.github.io/React/" target="_blank" rel="noreferrer"><h2>React Projects</h2></a>
                
            </div>
            <div className="project">
                <a href="https://dinesh-collab.github.io/javascript/" target="_blank" rel="noreferrer"><img src={js} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://dinesh-collab.github.io/javascript/" target="_blank" rel="noreferrer"><h2>JavaScript Projects</h2></a>
              
            </div>
            <div className="project">
                <a href="https://dinesh-collab.github.io/Angular/" target="_blank" rel="noreferrer"><img src={angular} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://dinesh-collab.github.io/Angular/" target="_blank" rel="noreferrer"><h2>Angular Projects</h2></a>
                
            </div>
            <div className="project">
                <a href="https://dinesh-collab.github.io/aws-saa-prep/" target="_blank" rel="noreferrer"><img src={aws} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://dinesh-collab.github.io/aws-saa-prep/" target="_blank" rel="noreferrer"><h2>AWS prep notes</h2></a>
                
            </div>
        </div>
    </div>
    );
}

export default Project;