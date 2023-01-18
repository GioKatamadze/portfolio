import styled from "styled-components";
import GithubLink from '../../../SVG/GithubLink.jsx';
import LinkedinLink from '../../../SVG/LinkedinLink.jsx';
import { HashLink } from 'react-router-hash-link';
import { Link, useLocation } from 'react-router-dom';

const StyledMenu = styled.div`
  width: 50%;
  height: 100vh;
  margin: 0 0 auto auto ;
  padding: 10px;
  padding-top: 60px;
  background-color: #f7fafc;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;
  overflow: hidden;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  flex-wrap: nowrap;

  .nostyle {
    text-decoration: none;
    margin-left: 20px;
    transition: .1s;
    font-weight: 400;
    font-size: 19px;
    line-height: 36px;
    color: #088b85;
    :hover {
        cursor: pointer;
        color: #07746f;
        font-weight: 700;
    }
  }

.links {
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  margin-left: 10px;
}

.links a {
  margin-top: 20px;
  margin-left: 10px;
}

@media only screen and (min-width: 768px) {
  display: flex;
  justify-content: space-between;
}
`

export const Menu = (props) => {
    return (
      <StyledMenu>
            <HashLink className="nostyle" smooth to="/#home">Home</HashLink>
            <HashLink className="nostyle" smooth to="/#about">About</HashLink>
            <Link to={'/projects'} state={{ from: "/" }} className='nostyle' >Projects</Link>
            <HashLink className="nostyle" smooth to="/#contact">Contact</HashLink>

        <div className='links'>
          <a href="https://github.com/GioKatamadze" target="_blank">
            <GithubLink />
          </a>
          <a href="https://www.linkedin.com/in/gio-katamadze-a409931a7" target="_blank">
            <LinkedinLink />
          </a>
        </div>
      </StyledMenu>
    );
};

