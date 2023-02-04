import styled from "styled-components";
import profileImage from "./profileImg.png"

export const StyledFooter = styled.div`
    width: 100vw;
    height: 170px;
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    background-color: #088b85;

    #title-box {
      display: flex;
      height: 100%;
      justify-content: space-between;
      align-items: flex-start;
      flex-direction: column;
      margin-left: 5vw;
    }

    #title-box p {
      text-align: left;
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      letter-spacing: 0.8px;
      color: #ffffff99;
    }

    #titleLogo h2 {
      margin-left: 10px;
      color: #FFFFFF;
      transition: .2s;
      font-weight: 700;
      font-size: 20px;
    }

    #titleLogo {
      text-decoration: none;
      display: flex;
      justify-content: center;
      align-items: center;
      height: max-content;
      flex-wrap: nowrap;
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
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }

    .links a {
      margin-top: 8px;
      margin-right: 10px;
    }

    @media (min-width: 768px) {
      padding: 20px;
      margin-top: 70px;

      #title-box {
      margin-top: 0;
      font-size: 25px;
    }
    }
`
export const StyledLinks = styled.div`
        display: flex;
        height: 100%;
        justify-content: space-between;
        align-items: flex-end;
        flex-direction: column;
        margin-right: 5vw;

        h2 {
            color: #FFFFFF;
            font-weight: 700;
            font-size: 20px;
            margin-bottom: 5px;
            letter-spacing: 1px;
        }

        .nostyle {
            text-align: right;
            text-decoration: none;
            font-weight: 400;
            font-size: 17px;
            margin-top: 7px;
            letter-spacing: 1px;
            color: #ffffff99;
        }

        .linkDiv {
            display: flex;
            justify-content: flex-start;
            align-items: flex-end;
            flex-direction: column;
            width: 70px;
            color: #FFFFFF;
        }

        .linkDiv:hover {
            cursor: pointer;
            color: #FFFFFF;
            .hr {
                visibility: visible;
            }
            .nostyle {
            color: #ffffff;
          }
        }
    @media (min-width: 800px) {
        .contactLink {
          display: none;
        }
    }
    @media (min-width: 1000px) {
        margin-right: 10vw;
    }
`