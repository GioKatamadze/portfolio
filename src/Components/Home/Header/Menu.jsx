import styled from "styled-components";
import GithubLink from '../../../SVG/GithubLink.jsx';
import LinkedinLink from '../../../SVG/LinkedinLink.jsx';

const StyledMenu = styled.div`
  width: 50%;
  height: 100vh;
  margin: 0 0 auto auto ;
  padding: 10px;
  padding-top: 60px;
  background-color: #f7fafc;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;
  overflow: hidden;

p {
  margin-left: 20px;
  transition: .1s;
  font-weight: 400;
  font-size: 19px;
  line-height: 36px;
}

p:hover {
  cursor: pointer;
  color: #088b85;
  font-weight: 700;
}

.links {
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
}

.links a {
  margin: 7px;
  margin-left: 20px;
}

@media only screen and (min-width: 768px) {
  display: flex;
  justify-content: space-between;
}
`

export const Menu = (props) => {
    return (
      <StyledMenu>
        <p>Home</p>
        <p>About</p>
        <p>Projects</p>
        <p>Contact</p>
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

