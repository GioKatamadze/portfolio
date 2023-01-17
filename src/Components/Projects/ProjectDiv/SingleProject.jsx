import { fetchProject } from '../../../store/actions/projectActions.js';
import { useSelector, useDispatch } from 'react-redux';
import { StyledWrapper, StyledItem } from './SingleProjectStyles.jsx';
import React, { useEffect, useState } from 'react';

import Arrow from "../../../SVG/ArrowUp.jsx"
import Globe from "./Globe.jsx"
import GitHub from "./GithubLink.jsx"

const SingleProject = (props) => {
    const projects = useSelector((state) => state.projects.items);
    const dispatch = useDispatch();

    const EachProject = projects.map((project, projectIndex) => {
        const iconArray = project.tech_icon
        const nameArray = project.tech_name
        const contentsArray = project.content

        return (
                    <StyledItem 
                    key={project.thumbnail} 
                    >
                        <h3 id='projectTitle' >{project.title}</h3>
                        <div className='thumbnail'>
                            <img 
                                className='thumbnailImage'
                                src={process.env.REACT_APP_API_URL + "/images/" + project.thumbnail}
                                alt="carousel slide"
                            />
                        </div>

                        <div className="description">

                            <h2>Used Technologies</h2>
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

                            <h2>Users Are Able To</h2>
                            <div>
                                {contentsArray.map((content) => {
                                    return (        
                                        <div className='contentItem' key={content}>
                                            <p>• {content}</p>
                                        </div>
                                    ) 
                                })}
                            </div>

                            <h2>Links</h2>
                            <div className='linkButtons'>
                                <div className='link'>
                                    <a href={project.live_link} target="_blank">
                                        <Globe /> 
                                        <p>Live Website</p>
                                    </a>
                                </div>
                                <div className='link'>
                                    <a href={project.front_link} target="_blank">
                                        <GitHub /> 
                                        <p>Front End Code</p>
                                    </a>
                                </div>
                                <div className='link' style={{display: project.back_link === "" ? 'none' : 'flex'}}>
                                    <a href={project.back_link} target="_blank">
                                        <GitHub /> 
                                        <p>Back End Code</p>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className='arrow'>
                            <Arrow />
                        </div>

                    </StyledItem>
        )
    });

    useEffect(() => {
        dispatch(fetchProject())
    }, [dispatch]);

    return (
        <StyledWrapper>
            {EachProject}
        </StyledWrapper>
    )
}

export default SingleProject





