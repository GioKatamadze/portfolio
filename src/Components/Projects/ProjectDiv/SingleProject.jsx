import { fetchProject } from '../../../store/actions/projectActions.js';
import { useSelector, useDispatch } from 'react-redux';
import { StyledWrapper, StyledItem } from './SingleProjectStyles.jsx';
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import Globe from "./Globe.jsx"
import GitHub from "./GithubLink.jsx"

const SingleProject = () => {
    const projects = useSelector((state) => state.projects.items);
    const numDescending = [...projects].sort((a, b) => b.project_id - a.project_id);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const EachProject = numDescending.map((project) => {
        const iconArray = project.tech_icon
        const nameArray = project.tech_name
        const contentsArray = project.content
        const goto = () => {
            navigate('/projects/' + project.project_id, { state: { from: location } });
        };

        return (
            <StyledItem key={project.thumbnail}>
                <div className='titleImg'>
                    <h3 id='projectTitle' >{project.title}</h3>
                    <div className='thumbnail'>
                        <img 
                            className='thumbnailImage'
                            src={process.env.REACT_APP_API_URL + "/images/" + project.thumbnail}
                            alt="carousel slide"
                        />
                    </div>
                    <div className='mobileLinkButtons' >
                        <a className='mobileLink hideOnMobile' href={project.live_link} target="_blank">
                            <Globe /> 
                            <p>Live Website</p>
                        </a>
                        <a className='mobileLink hideOnMobile' href={project.front_link} target="_blank"
                        style={{display: project.front_link === "" ? "none" : "flex"}}>
                            <GitHub /> 
                            <p>Front End Code</p>
                        </a>
                        <a className='mobileLink hideOnMobile' href={project.back_link} target="_blank"
                        style={{display: project.back_link === "" ? "none" : "flex"}}>
                            <GitHub /> 
                            <p>Back End Code</p>
                        </a>
                        <div className='link hideOnDesktop' onClick={goto}>
                                <p>Learn More</p>
                        </div>
                    </div>
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
                    <h2 className='hideOnMobileDescription' >Users Are Able To</h2>
                    <div className='pWrapper hideOnMobileDescription' >
                        {contentsArray.map((content) => {
                            return (        
                                <div className='contentItem' key={content}><p>• {content}</p></div>
                            ) 
                        })}
                    </div>
                    <div className='linkButtons'>
                        <div className='link hideOnDesktop' onClick={goto}>
                            <p>Learn More</p>
                        </div>
                    </div>
                </div>
            </StyledItem>)
    });

    useEffect(() => {
        dispatch(fetchProject())
    }, [dispatch]);

    return (
        <StyledWrapper >
            {EachProject}
        </StyledWrapper>
    )
}

export default SingleProject





