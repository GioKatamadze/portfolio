import styled from "styled-components";

const StyledContact = styled.div`
    width: 100vw;
    height: 500px;
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #007bff;

    .formWrapper {
        width: 500px;
        height: auto;
        background-color: white;
        border: 1px solid transparent;
        border-radius: 5px;
        box-shadow: var(--box-shadow);
        overflow: hidden;
        padding: 5px;
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
        margin-top: 5px;
        padding: 5px;
        border-bottom: 1px solid #25252574;
    }

    button {
        font-size: 15px;
        font-weight: 400;
        padding: 6px 8px;
        margin: 0 5px 0 0;
        border: 1px solid transparent;
        border-radius: 3px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.3s;
        color: #fff;
        background-color: #007bff;
    }
`

export default StyledContact