import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import dineshImage from "../assets/images/dinesh2.png";

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={dineshImage} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/dinesh-collab" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/dinesh-yeligandla/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Dinesh Yelgandla</h1>
          <p>Full Stack Engineer</p>
          <p>Passionate about building scalable applications and learning new technologies.</p>
          <div className="mobile_social_icons">
            <a href="https://github.com/dinesh-collab" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/dinesh-yeligandla/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );  
}

export default Main;