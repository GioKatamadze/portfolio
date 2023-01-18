import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { fetchProject } from '../../../store/actions/projectActions.js';
import Carousel from 'react-bootstrap/Carousel';
import { StyledWrapper, StyledCarousel, StyledItem } from './StyledProjects.jsx';
import { HashLink } from 'react-router-hash-link';


const ControlledCarousel = (props) => {
    const projects = useSelector((state) => state.projects.items);
    const dispatch = useDispatch();
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const CustomCarouselItem = projects.map((project) => {

        const iconArray = project.tech_icon
        const nameArray = project.tech_name

        return (
            <Carousel.Item key={project.project_id} interval={800} className='width'>
                <StyledItem>
                    <div className='thumbnail'>
                        <img 
                            className='thumbnailImage'
                            src={process.env.REACT_APP_API_URL + "/images/" + project.thumbnail}
                            alt="carousel slide"
                        />
                    </div>
                    <div className='textBox'>

                        <h3 id='projectTitle' >{project.title}</h3>

                        <div className='techItems'>
                            {nameArray.map((techName, index) => {
                                return (        
                                    <div className='eachItem' key={techName}>
                                        <img
                                            className='icon'
                                            src={process.env.REACT_APP_API_URL + "/icons/" + iconArray[index]}
                                            alt="carousel slide"
                                        />
                                        {techName}
                                    </div>
                                ) 
                            })}
                        </div>

                    </div>
                </StyledItem>
            </Carousel.Item>
        )
    });

    useEffect(() => {
        dispatch(fetchProject())
    }, [dispatch]);

    return (
        <StyledWrapper id='projects'>
            <StyledCarousel>
                <Carousel activeIndex={index} onSelect={handleSelect} className="carouselitem">
                    {CustomCarouselItem}
                </Carousel>
                <HashLink className='button' smooth to="/projects">View All Projects</HashLink>
            </StyledCarousel>
        </StyledWrapper>
    )
}

export default ControlledCarousel





