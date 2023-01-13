import StyledFooter from "./FooterStyles.jsx";
import GithubLink from './GithubLink.jsx';
import LinkedinLink from './LinkedinLink.jsx';

const Footer = (props) => {

    return (
      <StyledFooter>

        <div id='title-box'>
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

      </StyledFooter>
    );
  };

  export default Footer
  