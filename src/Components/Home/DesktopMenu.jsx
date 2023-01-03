import styled from "styled-components";

const StyledLinks = styled.div`
    display: none;

    @media (min-width: 768px) {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        flex-wrap: nowrap;
        height: 100%;
        margin-right: 10vw;
        gap: 30px;

        .pDiv {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-direction: column;
            height: 100%;
            width: 70px;
        }

        .pDiv p {
            transition: .2s;
            font-weight: 400;
            font-size: 20px;
            line-height: 36px;
        }

        .pDiv .hr {
            width: 40px;
            height: 2px;
            margin-top: -18px;
            border-radius: 10px;
            background-color: #088b844c;
            transition: .2s;
            visibility: hidden;
        }

        .pDiv:hover {
            cursor: pointer;
            color: #088b85;

            .hr {
                visibility: visible;
            }

            p {
                font-weight: 700;
                font-size: 21px;
            }
        }
    }
`

export const DesktopMenu = () => {
    return (
        <StyledLinks>
            <div className="pDiv">
            <p>Home</p>
            <div className="hr"></div>
            </div>

            <div className="pDiv">
            <p>About</p>
            <div className="hr"></div>
            </div>

            <div className="pDiv">
            <p>Projects</p>
            <div className="hr"></div>
            </div>

            <div className="pDiv">
            <p>Contact</p>
            <div className="hr"></div>
            </div>
        </StyledLinks>
    )
}