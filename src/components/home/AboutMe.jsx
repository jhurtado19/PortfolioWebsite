import React from "react";
import { Jumbotron } from "./migration";
import primarypic from "../../editable-stuff/profile1.jpg"


const AboutMe = ({ heading, message, link, imgSize, resume }) => {
  const [showPic] = React.useState(Boolean(link));
  // https://stackoverflow.com/questions/55840294/how-to-fix-missing-dependency-warning-when-using-useeffect-react-hook




  return (
    <Jumbotron id="aboutme" className="m-0">
      <div className="container row">
        <div className="col-5 d-none d-lg-block align-self-center">
          {showPic && (
            <div style={{position:'relative'}}><img style={{position:'absolute'}}
              className="disloop border border-secondary rounded-circle"
              src={primarypic}
              alt="profilepicture"
              width={imgSize}
              height={imgSize}
            />
            <img style={{position:''}}
              className="border border-secondary rounded-circle"
              src={primarypic}
              alt="profilepicture"
              width={imgSize}
              height={imgSize}
            /></div>
          )}
        </div>
        <div className={`col-lg-${showPic ? "7" : "12"}`}>
          <h2 className="display-4 mb-5 text-center">{heading}</h2>
          <p className="lead text-center">  My name is Jesse Hurtado, and I study the brain with mathematics and data analytics. I graduated from the University of California, Los Angeles in 2023 with a Bacherlor of Science in Neuroscience. If you've ever asked yourself about the orign of your own thoughts, dreams, and memories, then you have seen what questions move us along in the world of studying the mind. My own work has centered around visualizing neural data and building and testing simulated neurons to better understand their dynamics and decode their mysteries. To see how my mind perceives the world through a camera lens , take a look at my photography <a  href="https://jessehurtado.myportfolio.com/welcome" target="_blank" rel="noopener noreferrer"> portfolio</a> here.</p>
          {resume && (
            <p className="lead text-center">
              <a
                className="btn btn-outline-dark btn-lg"
                href={resume}
                target="_blank"
                rel="noreferrer noopener"
                role="button"
                aria-label="Resume/CV"
              >
                Resume
              </a>
            </p>
          )}
        </div>
      </div>
    </Jumbotron>
  );
};

export default AboutMe;
