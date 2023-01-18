import styled from "styled-components";
import Contact from "../Contact/Contact.jsx";

const StyledParagraph = styled.div`
    scroll-margin-top: 200px;
    margin-top: 50px;
    width: 100vw;
    height: auto;
    padding: 20px 7vw;
    background-color: #32b5a422;

    .contactForm {
        display: none;
        }

    .ps {
            margin-top: 10px;
        }
    p {
        font-weight: 400;
        font-size: 15px;
        line-height: 21px;
        color: #333537;
        margin-top: 0;
    }

    @media (min-width: 800px) {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: nowrap;
        padding: 30px 7vw;
        gap: 5%;
        .ps {
            width: 50%;
            margin-top: -10px;
        }
        p {
            margin-top: 10px;
        }
        .contactForm {
            display: block;
            width: 50%;
            box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
            border-radius: 5px;
        }
    }

    @media (min-width: 1000px) {
        padding: 30px 10vw;
        margin-top: 70px;
        gap: 5%;
        p {
            font-weight: 400;
            font-size: 17px;
        }
    }
`

const Paragraph = () => {
    return (
        <StyledParagraph id="about">
                <div className='ps'>
                    <p>Hello, I am Gio.</p> 
                    <p>As a developer, you'll find in me someone deeply enthusiastic about code architecture and performance.</p> 
                    <p>As a teammate, someone who values direct communication and likes to integrate and talk with everyone.</p> 
                    <p>My mission is to bring excellent project satisfaction by providing quality and professional work.</p>
                </div> 
                <div className="contactForm">
                    <Contact />
                </div>
        </StyledParagraph>
    )
}

export default Paragraph