import Header from "../../Components/Home//Header/Header.jsx";
import SingleProjectById from "../../Components/Projects/ProjectDiv/ProjectById.jsx";
import Footer from "../../Components/Home/Footer/Footer.jsx";
import styled from "styled-components";

const ProjectPage = styled.div`
    width: 100vw;
    background-color: #F8F8F8;
`

const ProjectById = () => {
    return (
        <ProjectPage>
            <Header />
            <SingleProjectById />
            <Footer />
        </ProjectPage>
    )
}

export default ProjectById