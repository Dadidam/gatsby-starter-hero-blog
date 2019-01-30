import React from "react";
import PropTypes from "prop-types";

import { FaArrowDown } from "react-icons/fa/";

const Hero = props => {
  const { scrollToContent, backgrounds, theme } = props;

  return (
    <React.Fragment>
      <section id="video-section">
        <div className="overlay" />
        <video autoPlay muted loop playsInline>
          <source src="fox.mp4" type="video/mp4" />
        </video>
      </section>
      {/* --- STYLES --- */}
      <style jsx>{`
        #video-section {
          position: relative;
          background-color: black;
          height: 100px;
          min-height: 100vh;
          width: 100%;
          overflow: hidden;
        }

        #video-section video {
          position: absolute;
          top: 50%;
          left: 50%;
          min-width: 100%;
          min-height: 100%;
          width: 100%;
          height: 100%;
          z-index: 0;
          -ms-transform: translateX(-50%) translateY(-50%);
          -moz-transform: translateX(-50%) translateY(-50%);
          -webkit-transform: translateX(-50%) translateY(-50%);
          transform: translateX(-50%) translateY(-50%);
        }

        #video-section .overlay {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          background-color: black;
          opacity: 0.1;
          z-index: 1;
        }

        @media (pointer: coarse) and (hover: none), only screen and (max-width: 500px) {
          #video-section {
            background: url("poster-white.jpg") transparent no-repeat center center scroll;
            background-size: 80%;
          }
          #video-section video {
            display: none;
          }
        }
      `}</style>
    </React.Fragment>
  );
};

Hero.propTypes = {
  scrollToContent: PropTypes.func.isRequired,
  backgrounds: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default Hero;
