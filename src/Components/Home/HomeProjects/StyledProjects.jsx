import styled from 'styled-components';

export const StyledWrapper = styled.div`
    width: 90vw;
    margin-top: 50px;
    scroll-margin-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .width {
        width: 90vw;
    }
    .button {
        width: 160px;
        height: 40px;
        background-color: #2792f0;
        color: white;
        text-decoration: none;
        font-size: 16px;
        font-weight: 700;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px;
        border-radius: 8px;
        transition: .1s;
        transform: translate(1px, -1px);
        box-shadow: #78b8ef -4px 4px;
        :active {
            cursor: pointer;
            background-color: #2792f0;
        }
    }

    @media (min-width: 500px) {
        margin-top: 70px;
    }

    @media (min-width: 900px) {
        .button {
            width: 200px;
            height: 50px;
            font-size: 20px;
        }
    }

    @media (min-width: 1000px) {
        scroll-margin-top: 100px;
        margin-top: 50px;
    }
`

export const StyledCarousel = styled.div`
    padding: 20px;
    width: 90vw;
    height: max-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
    background-color: #FFFFFF;
    border: 4px solid #3e3b4099; 
    box-shadow: #9ccaf2fc -10px 11px;
    border-radius: 10px;
    .carouselitem {
        .carousel-control-prev-icon, .carousel-control-next-icon, .carousel-indicators {
        display: none;
        }
    }
    @media (min-width: 500px) {
        padding: 30px;
    }
`

export const StyledItem = styled.div`
    height: 280px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;

    .techItems, .eachItem {
        display: none;
    }
    .textBox {
        height: max-content;
        width: max-content;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    #projectTitle {
            font-size: 20px;
            font-weight: 700;
            height: auto;
            text-align: center;
            margin-top: 20px;
            color: #2792f0;
        }
    .thumbnailImage {
        width: 65vw;
        box-shadow: rgba(3, 101, 214, 0.511) 0px 0px 0px 3px, rgba(3, 102, 214, 0.12) 0px 2px 4px 0px, rgba(3, 102, 214, 0.32) 0px 2px 16px 0px;
        border-radius: 10px;
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
        .textBox {
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