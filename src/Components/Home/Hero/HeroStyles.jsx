import styled from 'styled-components';

const StyledHero = styled.div`
    width: 90vw;
    height: max-content;
    margin-top: 35px;
    padding: 20px 20px 30px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: nowrap;
    border-radius: 10px;
    background-color: #FFFFFF;
    transform: translate(2px, -2px);
    outline: 4px solid #3e3b4099; 
    box-shadow: #8fedd9 -8px 8px;
    
    .titleWrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;   
        h1 {
            font-weight: 900;
            color: #27a39d;
        }
    }

    .titleWrapper2 {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;   
        h1 {
            margin-top: 25px;
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
        box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
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
        outline: 1.5px solid #9aead9; 
        img {
            margin-right: 5px;
        }
    }

    .li:hover {
            transition: .2s;
            transform: translate(1px, -2px);
            outline: 1.5px solid #2998fa; 
            box-shadow: #A7F0E0 -4px 4px;
            cursor: pointer;
        }
    
        .and {
            width: 40px;
            height: 40px;
            display: flex;
            margin-top: 30px;
            justify-content: center;
            align-items: center;
            border-radius: 100%;
            font-size: 25px;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
            color: white;
            background-color: #27a39d;
        }

    @media (min-width: 600px) {
        width: 90vw;
    }

    @media (min-width: 1000px) {
        width: 80vw;
        height: 100%;
        margin-top: 50px;
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
        padding: 20px 30px 30px 30px;
        transform: translate(2px, -2px);
        outline: 4px solid #3e3b4099; 
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
            h1 {
                margin-top: 0;
                font-weight: 900;
                text-align: left; 
            }
        }

        .titleWrapper2, .techWrapper2 {
            justify-content: flex-start;
            align-items: flex-end;
            text-align: right;  
            h1 {
                margin-top: 0;
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
            transform: translate(1px, -2px);
            outline: 2px solid #2998fa; 
            box-shadow: #A7F0E0 -5px 5px;
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