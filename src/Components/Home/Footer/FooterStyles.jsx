import styled from "styled-components";
import profileImage from "./profileImg.png"

export const StyledFooter = styled.div`
bottom: 0;
    width: 100vw;
    height: max-content;
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    background-color: #088b85;

    #title-box {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      margin-left: 5vw;
    }

    #title-box h2 {
      margin-left: 10px;
      margin-top: 5px;
      color: #FFFFFF;
      transition: .2s;
      font-weight: 700;
      font-size: 20px;
    }

    .titleLogo {
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
        height: max-content;
        justify-content: flex-end;
        align-items: flex-end;
        flex-direction: column;
        margin-right: 5vw;

        h2 {
            color: #FFFFFF;
            font-weight: 700;
            font-size: 20px;
            margin: 5px 0;
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
    @media (min-width: 1000px) {
        margin-right: 10vw;
    }
`