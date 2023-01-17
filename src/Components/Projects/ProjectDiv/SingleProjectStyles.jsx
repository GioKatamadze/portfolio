import styled from 'styled-components';

export const StyledWrapper = styled.div`
    width: 100vw;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: 500px) {
        margin-top: 70px;
    }

    @media (min-width: 1000px) {
        margin-top: 50px;
    }
`

export const StyledItem = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border-radius: 10px;
    background-color: #FFFFFF;
    margin-bottom: 30px;
    transition: .3s;

    #projectTitle {
            font-size: 20px;
            font-weight: 700;
            height: auto;
            text-align: center;
            margin-bottom: 18px;
            color: #2792f0;
    }

    .thumbnailImage {
        width: 80vw;
        box-shadow: rgba(3, 101, 214, 0.511) 0px 0px 0px 3px, rgba(3, 102, 214, 0.12) 0px 2px 4px 0px, rgba(3, 102, 214, 0.32) 0px 2px 16px 0px;
        border-radius: 10px;
    }

    .description {
        visibility: hidden;
        height: 0;
        transition: .3s;
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
        box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.12) 0px 1px 2px;
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
        outline: 1.5px solid #9aead9; 
        .icon {
            margin-right: 4px;
            width: 18px;
            height: 18px;
        }
    }

    .eachItem:hover {
        transition: .2s;
        transform: translate(1px, -2px);
        outline: 1.5px solid #2998fa; 
        box-shadow: #A7F0E0 -4px 4px;
        cursor: pointer;
    }

    .linkButtons {
        width: 100%;
        height: max-content;
        margin-top: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }

    .link {
        width: 100%;
        height: 40px;
        background-color: #2792f0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: nowrap;
        padding: 5px;
        margin-bottom: 5px;
        border-radius: 8px;
        transition: .3s;
        :active {
            cursor: pointer;
            background-color: #2792f0;
            transform: translate(1px, -1px);
            box-shadow: #78b8ef -4px 4px;
        }

        p {
            display: block;
            margin-left: 5px;
            color: white;
            font-size: 17px;
            font-weight: 700;
            text-decoration: none;
        }
    }

    .link a {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: nowrap;
        text-decoration: none;
    }

    .arrow {
        transform: scale(2.5) rotate(180deg);
        margin-top: 25px;
    }

    :hover, :active {
        outline: 4px solid #3e3b40f0; 
        box-shadow: #65e7cb -8px 10px;

        .description {
        visibility: visible;
        height: auto;
        margin-top: 15px;

        .arrow {
        transform: rotate(0deg);
        margin-top: 15px;
        }
    }
    }


    @media (min-width: 500px) {
        height: 300px;

        #projectTitle {
            font-size: 22px;
            text-align: left;
        }
        .thumbnailImage {
            width: 60vw;
        }
    }


    @media (min-width: 700px) {
        height: 430px;

        .thumbnailImage {
            width: 65vw;
        }
    }

    
    @media (min-width: 900px) {
        flex-wrap: nowrap;
        flex-direction: row;

        .thumbnail {
            width: 60%;
            height: max-content;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .thumbnailImage {
            width: 80%;
        }
        .description {
            width: 40%;
            align-items: flex-start;
        }
        #projectTitle {
            width: 90%;
            font-size: 27px;
            font-weight: 900;
            height: max-content;
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
            outline: 1.5px solid #9aead9; 
            .icon {
                margin-right: 4px;
                width: 18px;
                height: 18px;
            }
        }
        .eachItem:hover {
                transition: .2s;
                transform: translate(1px, -2px);
                outline: 1.5px solid #2998fa; 
                box-shadow: #A7F0E0 -4px 4px;
                cursor: pointer;
            }
    }
    
`