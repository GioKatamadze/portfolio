import styled from "styled-components";
import profileImage from "./profileImg.png"

const StyledFooter = styled.div`
    width: 100vw;
    height: 100px;
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    background-color: #088b85;

    #title-box {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
      flex-wrap: nowrap;
      margin-left: 10vw;
    }

    #title-box h2 {
      margin-left: 10px;
      margin-top: 5px;
      color: #FFFFFF;
      transition: .2s;
      font-weight: 700;
      font-size: 20px;
    }

    .profileImage {
      width: 30px;
      height: 30px;
      border-radius: 100%;
      background-image: url(${profileImage});
      background-size: cover;
    }

    #title-box:hover {
      cursor: pointer;

      .profileImage {
        outline: 2px solid #FFFFFF;
      }
    }

    .links {
      margin-right: 10vw;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }

    .links a {
      margin: 7px;
      margin-left: 10px;
    }

    @media (min-width: 768px) {
      .profileImage {
      width: 40px;
      height: 40px;
      }

      #title-box {
      margin-top: 0;
      font-size: 25px;
    }
    }
`

export default StyledFooter