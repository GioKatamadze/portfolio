import profileImage from "./profileImg.png"
import styled from "styled-components";

const StyledHeader = styled.div`
    width: 100vw;
    height: 75px;
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    align-items: center;
    flex-direction: row;
    background-color: #F8F8F8;
    z-index: 100;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 25px 20px -20px;

    #title-box {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
      flex-wrap: nowrap;
      margin-left: 10vw;
      margin-top: -5px;
    }

    #title-box h2 {
      margin-left: 19px;
      color: #3a3344;
      transition: .2s;
      font-weight: 700;
      font-size: 25px;
    }

    .profileImage {
      width: 40px;
      height: 40px;
      border-radius: 100%;
      background-image: url(${profileImage});
      background-size: cover;
    }

    #title-box:hover {
      cursor: pointer;

      h2 {
        color: #088b85;
      }
      .profileImage {
        outline: 2px solid #088b85;
      }
    }


    .menuIcon {
      margin-right: 10vw;
      z-index: 1000;
    }

    .menuIcon:hover {
      cursor: pointer;
    }

    .menuDiv {
      width: 100vw;
      height: 100vh; 
      position: absolute;
      top: 0; 
      right: 0;
      background-color: rgba(0, 0, 0, 0.2); 
    }

    @media (min-width: 768px) {
      .menuIcon, .menuDiv {
        display: none;
      }

      #title-box {
      margin-top: 0;
    }
    }
`

export default StyledHeader