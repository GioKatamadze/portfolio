import styled from "styled-components";

const DesktopStyledContact = styled.div`
    scroll-margin-top: 100px;
    width: 100vw;
    height: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #2792f030;
    margin-top: 55px;
    padding: 40px 0; 

    .formWrapper {
        width: 90%;
        height: auto;
        background-color: white;
        border: 1px solid transparent;
        border-radius: 5px;
        box-shadow: rgba(50, 50, 93, 0.1) 0px 2px 5px -1px, rgba(0, 0, 0, 0.1) 0px 1px 3px -1px;
        overflow: hidden;
        padding: 10px;
    }

    .form {
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        font-size: 15px;
        font-weight: 400;
    }

    input, textarea {
        border: none;
        width: 100%;
        margin-top: 10px;
        padding: 7px;
        border-bottom: 1px solid #2525251b;
    }

    textarea {
        min-height: 35px;
        resize: vertical;
    }

    button {
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
        border: none;
        margin-top: 20px;
        margin-bottom: 20px;
        transition: .1s;
        box-shadow: #78b8ef -4px 4px;
        :active {
            cursor: pointer;
            background-color: #2792f0;
        }
    }

    @media (min-width: 800px) {
        display: none;
    }
`

export default DesktopStyledContact