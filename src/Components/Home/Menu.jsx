import styled from "styled-components";

const StyledMenu = styled.div`
  width: 50%;
  height: 100vh;
  margin: 0 0 auto auto ;
  padding: 10px;
  padding-top: 40px;
  background-color: #f7fafc;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;

p {
  margin-left: 20px;
  transition: .1s;
  font-weight: 400;
  font-size: 19px;
  line-height: 36px;
}

p:hover {
  cursor: pointer;
  color: #088b85;
  font-weight: 700;
}


@media only screen and (min-width: 768px) {
  display: flex;
  justify-content: space-between;
}
`

export const Menu = (props) => {
    return (
      <StyledMenu>
        <p>Home</p>
        <p>About</p>
        <p>Projects</p>
        <p>Contact</p>
      </StyledMenu>
    );
};

