import styled from 'styled-components';

export const StyledWrapper = styled.div`
    width: 100vw;
    margin-top: 30px;
    scroll-margin-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (min-width: 800px) {
        margin-top: 25px;
    }
    @media (min-width: 1000px) {
        margin-top: 40px;
    }
`

export const StyledItem = styled.div`
    scroll-margin-top: 100px;
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border-radius: 10px;
    background-color: #FFFFFF;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
    margin-bottom: 30px;
    transition: .2s;

    #projectTitle {
            font-size: 20px;
            font-weight: 700;
            height: auto;
            text-align: center;
            margin-bottom: 18px;
            color: #107b76;
            width: 100%;
    }

    .thumbnailImage {
        width: 80vw;
        box-shadow: #27a39d 0px 0px 0px 2px;
        border-radius: 10px;
    }

    .description {
        height: auto;
        transition: .2s;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .description h2 {
        width: 100%;
        text-align: left;
        font-size: 17px;
        font-weight: 700;
        margin-top: 8px;
        margin-bottom: 4px;
        margin-left: 10px;
        color: #191919e2;
    }

    .techItems {
        width: 100%;
        margin-bottom: 15px;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: row;
        flex-wrap: wrap;
    }
    
    .contentItem {
        margin-bottom: 15px;
    }

    .contentItem p {
        margin-top: 10px;
        font-family: 'Lato', sans-serif;
        font-size: 15px;
        color: #1c1c1ce1;
        letter-spacing: 0.5px;
        line-height: 16px;
    }
    .eachItem {
        background-color: #FFFFFF;
        height: max-content;
        width: max-content;
        padding: 5px;
        margin: 4px 3px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 400;
        font-size: 15px;
        border-radius: 5px;
        border: 1.5px solid #9aead9; 
        .icon {
            margin-right: 4px;
            width: 18px;
            height: 18px;
        }
    }

    .eachItem:hover {
        transition: .2s;
        transform: translate(1px, -2px);
        border: 1.5px solid #2998fa; 
        box-shadow: #A7F0E0 -4px 4px;
        cursor: pointer;
    }

    .linkButtons, .mobileLinkButtons {
        width: 100%;
        height: max-content;
        margin-top: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }

    .link, .mobileLink {
        width: 100%;
        height: 40px;
        background-color: #0f9992;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: nowrap;
        padding: 5px;
        margin-bottom: 10px;
        border-radius: 8px;
        transition: .2s;
        box-shadow: #0de2d7 -4px 4px;
        :active, :hover {
            cursor: pointer;
            background-color: #0b726c;
            box-shadow: #0bc3b9 -4px 4px;
        }
        p {
            display: block;
            margin-left: 5px;
            color: white;
            font-size: 16px;
            font-weight: 700;
            text-decoration: none;
        }
    }

    .link a, .mobileLink a {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: nowrap;
        text-decoration: none;
        margin-left: -4px;
    }

    .arrow {
        transform: scale(2) rotate(180deg);
        margin-top: 25px;
    }

    .mobileLinkButtons {
        display: none;
    }

    :active, :hover {
        border: 4px solid #3e3b40f0; 
        box-shadow: #65e7cb -8px 8px;
        scroll-margin-top: 100px;

        .description {
            margin-top: 15px;
        }
    }

    @media (min-width: 500px) {
        #projectTitle {
            font-size: 25px;
        }
        .thumbnailImage {
            width: 70vw;
        }
    }

    
    @media (min-width: 800px) {
        flex-wrap: nowrap;
        flex-direction: row;
        scroll-margin-top: 100px;
        transition: .1s;
        margin-top: 35px;
        padding: 30px;
        gap: 5%;

        #mobileH2, .linkButtons {
            display: none;
        }
        .mobileLinkButtons {
            display: block;
            width: 80%;
        }
        :hover {
            cursor: pointer;
            border: 3px solid #3e3b40f0; 
            box-shadow: #65e7cb -5px 6px;
        }
        .arrow {
            display: none;
        }
        .titleImg {
            width: 40%;
            flex-wrap: wrap;
            height: max-content;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        #projectTitle {
            width: 90%;
            text-align: center;
            font-size: 27px;
            font-weight: 900;
            height: max-content;
        }
        .thumbnail {
            width: 100%;
            height: max-content;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .thumbnailImage {
            width: 80%;
        }
        .description {
            visibility: visible;
            margin-top: 15px;
            height: auto;
            width: 60%;
            align-items: flex-start;
        }

        .techItems {
            width: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            flex-direction: row;
            flex-wrap: wrap;
        }
        .eachItem {
            box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.12) 0px 1px 2px;
            height: max-content;
            width: max-content;
            padding: 5px;
            margin: 4px 3px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: 400;
            font-size: 15px;
            border-radius: 5px;
            border: 1.5px solid #9aead9; 
            .icon {
                margin-right: 4px;
                width: 18px;
                height: 18px;
            }
        }
        .eachItem:hover {
                transition: .2s;
                transform: translate(1px, -2px);
                border: 1.5px solid #2998fa; 
                box-shadow: #A7F0E0 -4px 4px;
                cursor: pointer;
            }
    }

    @media (min-width: 1000px) {
        width: 80%;
    }
    
`