import styled from "styled-components";

const StyledParagraph = styled.div`
    margin-top: 40px;
    width: 100vw;
    height: auto;
    padding: 20px 7vw;
    background-color: #494b4b23;

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

    @media (min-width: 1000px) {
        padding: 30px 10vw;
        margin-top: 50px;
        .ps {
            margin-top: 10px;
            }
        p {
            font-weight: 400;
        }
    }
`

const Paragraph = () => {
    return (
        <StyledParagraph>
                <div className='ps'>
                    <p>Hello, I am Gio.</p> 
                    <p>As a developer, you'll find in me someone deeply enthusiastic about code architecture and performance.</p> 
                    <p>As a teammate, someone who values direct communication and likes to integrate and talk with everyone.</p> 
                    <p>My mission is to bring excellent project satisfaction by providing quality and professional work.</p>
                </div> 
        </StyledParagraph>
    )
}

export default Paragraph