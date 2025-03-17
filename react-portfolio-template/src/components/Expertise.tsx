import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faJava, faAws } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const frontendSkills = [
    "HTML5", "CSS3", "JavaScript", "TypeScript", "Angular", "React", "Vue", "WCAG", "Ember", "jQuery",
    "Jasmine", "Karma", "Selenium", "UI Design", "Mobile Development"
];

const backendSkills = [
    "Java (Java 17)", "Python", "Spring Boot", "Hibernate", "Node.js", "RESTful APIs", "GraphQL",
    "PostgreSQL", "MongoDB", "MySQL", "Oracle DB", "Cassandra", "SQL", "NoSQL"
];

const cloudDevOpsSkills = [
    "AWS", "Azure", "Google Cloud (GCP)", "Nginx", "Adobe AEM", "Docker", "Kubernetes", "Jenkins",
    "GitHub Actions", "Git", "Bitbucket", "Splunk", "Kafka", "Postman", "Jira"
];

const methodologies = [
    "Agile Development", "Data Science", "Regression", "Classification", "Clustering",
    "Security Practices", "MVC", "OOPs", "PaaS", "SaaS"
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Expertise</h1>
                <div className="skills-grid">
                    <div className="skill">
                        <FontAwesomeIcon icon={faReact} size="3x"/>
                        <h3>Frontend Development</h3>
                        <p>Expert in modern UI frameworks like React, Angular, and Vue. Strong knowledge of WCAG accessibility, UI/UX design, and performance optimization for scalable applications.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {frontendSkills.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faJava} size="3x"/>
                        <h3>Backend & API Development</h3>
                        <p>Experienced in building scalable backend solutions using Java, Python, Spring Boot, and Node.js. Expertise in developing RESTful APIs and GraphQL services.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {backendSkills.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faAws} size="3x"/>
                        <h3>Cloud & DevOps</h3>
                        <p>Skilled in cloud technologies like AWS, Azure, and GCP, as well as DevOps practices including CI/CD, Kubernetes, and containerization.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {cloudDevOpsSkills.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faDocker} size="3x"/>
                        <h3>Software Engineering & Methodologies</h3>
                        <p>Deep understanding of Agile development, data science techniques, security practices, and scalable software architecture.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {methodologies.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Expertise;