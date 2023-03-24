import styled from 'styled-components';

const StyledHero = styled.div`
    width: 90vw;
    height: auto;
    margin-top: 30px;
    scroll-margin-top: 100px;
    padding: 20px 20px 30px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: nowrap;
    border-radius: 10px;
    background-color: #FFFFFF;
    border: 4px solid #3e3b4099; 
    box-shadow: #8fedd9 -8px 8px;
    
    .titleWrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;   
        h2 {
            font-size: 25px;
            font-weight: 900;
            color: #27a39d;
            margin-bottom: 15px;
        }
    }

    .titleWrapper2 {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;   
        h2 {
            margin-top: 25px;
            margin-bottom: 15px;
            font-size: 25px;
            font-weight: 900;
            color: #27a39d;
        }
    }

    .techWrapper {
        width: 100%;
        text-align: center;
    }

    .techWrapper2 {
        width: 100%;
        text-align: center;
    }

    .techItems {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .techItems2 {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .li {
        height: max-content;
        width: max-content;
        padding: 4px;
        padding-right: 5px;
        margin: 4px 3px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 400;
        font-size: 15px;
        border-radius: 5px;
        border: 1.5px solid #9aead9; 
        img {
            margin-right: 5px;
        }
    }

    .li:hover {
            transition: .2s;
            transform: translate(1px, -2px);
            border: 1.5px solid #2998fa; 
            box-shadow: #A7F0E0 -4px 4px;
            cursor: pointer;
        }
    
        .and {
            width: 35px;
            height: 35px;
            display: flex;
            margin-top: 30px;
            justify-content: center;
            align-items: center;
            border-radius: 100%;
            font-size: 22px;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
            color: white;
            background-color: #27a39d;
        }

    @media (min-width: 600px) {
        margin-top: 40px;
        width: 90vw;
    }

    @media (min-width: 1000px) {
        width: 80vw;
        height: 100%;
        margin-top: 70px;
        scroll-margin-top: 130px;
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
        padding: 20px 30px 30px 30px;
        transform: translate(2px, -2px);
        border: 4px solid #3e3b4099; 
        box-shadow: #A7F0E0 -10px 10px;
        position: relative;

        .techWrapper {
            margin-top: 0;
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            flex-direction: column;
        }

        .techWrapper2 {
            margin-top: 0;
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            flex-direction: column;
        }

        .titleWrapper {
            margin-top: 0;
            width: 45%;
        }

        .titleWrapper2 {
            margin-top: 0;
            width: 45%;
        }

        .titleWrapper, .techWrapper {
            justify-content: flex-start;
            align-items: flex-start;
            text-align: left;  
            h2 {
                margin-top: 15px;
                margin-bottom: 0;
                font-size: 28px;
                font-weight: 900;
                text-align: left; 
            }
        }

        .titleWrapper2, .techWrapper2 {
            justify-content: flex-start;
            align-items: flex-end;
            text-align: right;  
            h2 {
                margin-top: 15px;
                margin-bottom: 0;
                font-size: 28px;
                font-weight: 900;
                text-align: right; 
            }
        }

        .techItems {
            padding: 30px 0;
            width: 90%;
            justify-content: flex-start;
        }

        .techItems2 {
            padding: 30px 0;
            width: 90%;
            justify-content: flex-end;
        }

        .li:hover {
            transition: .2s;
            box-shadow: #A7F0E0 -4px 4px;
            cursor: pointer;
        }

        .andWrapper {
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            margin-top: -30px;
        }

        .and {
            margin-top: 0;
            width: 45px;
            height: 45px;
        }

    }
`

export default StyledHero