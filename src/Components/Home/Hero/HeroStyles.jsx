import styled from 'styled-components';

const StyledHero = styled.div`
    width: 80vw;
    height: max-content;
    margin-top: 25px;
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
        .ps {
            margin-top: 10px;
        }
        h1 {
            font-weight: 900;
            color: #27a39d;
        }
        p {
            font-weight: 400;
            font-size: 16px;
            line-height: 21px;
            color: #333537;
            margin-top: 0;
        }
    }

    .techWrapper {
        width: 100%;
        margin-top: 25px;
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

    .li {
        box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.12) 0px 1px 2px;
        height: max-content;
        width: max-content;
        padding: 5px;
        margin: 4px 3px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 400;
        font-size: 16px;
        border-radius: 5px;
        /* outline: 1.5px solid #9aead9;  */
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

    @media (min-width: 600px) {
        width: 80vw;
    }

    @media (min-width: 1000px) {
        width: 80vw;
        gap: 10%;
        margin-top: 40px;
        flex-direction: row;
        padding: 20px 30px 30px 30px;
        transform: translate(2px, -2px);
        outline: 4px solid #3e3b4099; 
        box-shadow: #A7F0E0 -10px 10px;

        .techWrapper {
            margin-top: 0;
            display: flex;
            justify-content: flex-end;
            align-items: flex-start;
            flex-direction: column;
        }

        .titleWrapper {
            margin-top: 30px;
        }

        .titleWrapper, .techWrapper  {
            width: 40%;
            justify-content: flex-start;
            align-items: flex-start;
            text-align: left;  
            .ps {
            margin-top: 10px;
            }
            h1 {
                font-weight: 900;
                text-align: left; 
            }
            p {
                font-weight: 400;
            }
        }

        .techItems {
            padding: 30px 0;
            justify-content: flex-end;
        }

        .li:hover {
            transition: .2s;
            transform: translate(1px, -2px);
            outline: 2px solid #2998fa; 
            box-shadow: #A7F0E0 -5px 5px;
            cursor: pointer;
        }

    }
`

export default StyledHero