import styled from "styled-components";
import React from "react";
import { HashLink } from 'react-router-hash-link';
import { Link, useLocation } from 'react-router-dom';

const StyledLinks = styled.div`
    display: none;

    @media (min-width: 768px) {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        flex-wrap: nowrap;
        height: 100%;
        margin-right: 5vw;
        gap: 30px;

        .nostyle {
            text-decoration: none;
            font-weight: 400;
            font-size: 20px;
            line-height: 36px;
            letter-spacing: 1px;
            color: #088b85;
        }

        .linkDiv {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-direction: column;
            width: 70px;
            color: #088b85;
        }

        .linkDiv .hr {
            width: 40px;
            height: 2px;
            border-radius: 10px;
            background-color: #088b84d9;
            visibility: hidden;
        }

        .linkDiv:hover {
            cursor: pointer;
            color: #07746f;
            .hr {
                visibility: visible;
            }
        }
    }

    @media (min-width: 1000px) {
        margin-right: 10vw;
    }
`

export const DesktopMenu = () => {
    return (
        <StyledLinks>
            <div className="linkDiv">
            <HashLink className="nostyle" smooth to="/#home">Home</HashLink>
            <div className="hr"></div>
            </div>

            <div className="linkDiv">
            <HashLink className="nostyle" smooth to="/#about">About</HashLink>
            <div className="hr"></div>
            </div>

            <div className="linkDiv">
            <Link to={'/projects'} state={{ from: "/" }} className='nostyle' >Projects</Link>
            <div className="hr"></div>
            </div>
        </StyledLinks>
    )
}