import Header from "../../Components/Home//Header/Header.jsx";
import Hero from "../../Components/Home/Hero/Hero.jsx";
import Paragraph from "../../Components/Home/Paragraph/Paragraph.jsx";
import ControlledCarousel from "../../Components/Home/HomeProjects/HomeProjects.jsx"
import DesktopContact from "../../Components/Home/DesktopContact/DesktopContact.jsx";
import Contact from "../../Components/Home/Contact/Contact.jsx";
import Footer from "../../Components/Home/Footer/Footer.jsx";

import styled from "styled-components";

const HomePage = styled.div`
    width: 100vw;
    height: max-content;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    flex-wrap: nowrap;
    background-color: #F8F8F8;
`

const Home = () => {
    return (
        <HomePage>
            <Header />
            <Hero />
            <Paragraph />
            <ControlledCarousel />
            <DesktopContact />
            <Footer />
        </HomePage>
    )
}

export default Home

