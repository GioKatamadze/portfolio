import {StyledFooter, StyledLinks} from "./FooterStyles.jsx";
import GithubLink from './GithubLink.jsx';
import LinkedinLink from './LinkedinLink.jsx';
import React from "react";
import { HashLink } from 'react-router-hash-link';
import { Link, useLocation } from 'react-router-dom';


const Footer = (props) => {

    return (
      <StyledFooter>

        <div id='title-box'>
          <div className="titleLogo">
            <div className="profileImage"></div>
            <h2>Gio Katamadze</h2>
          </div>

          <div className='links'>
          <a href="https://github.com/GioKatamadze" target="_blank">
            <GithubLink />
          </a>
          <a href="https://www.linkedin.com/in/gio-katamadze-a409931a7" target="_blank">
            <LinkedinLink />
          </a>
          </div>

        </div>

        <StyledLinks>
              <h2>Links</h2>
              <div className="linkDiv">
                  <HashLink className="nostyle" smooth to="/#home">Home</HashLink>
              </div>

              <div className="linkDiv">
                  <HashLink className="nostyle" smooth to="/#about">About</HashLink>
              </div>

              <div className="linkDiv">
                  <HashLink className="nostyle" smooth to="/#contact">Contact</HashLink>
              </div>

              <div className="linkDiv">
                  <Link to={'/projects'} state={{ from: "/" }} className='nostyle' >Projects</Link>
              </div>
        </StyledLinks>

      </StyledFooter>
    );
  };

  export default Footer
  