import { fetchSingleProject } from '../../../store/actions/projectActions.js';
import { useSelector, useDispatch } from 'react-redux';
import { StyledWrapper, StyledItem } from './ProjectByIdStyles.jsx';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Oval } from 'react-loader-spinner';
import Globe from "./Globe.jsx"
import GitHub from "./GithubLink.jsx"

const SingleProjectById = () => {
    const project =  useSelector((state) => state.singleProject.items);
    const [loading, setLoading] = useState(true)
    const iconArray = project.tech_icon;
    const nameArray = project.tech_name;
    const contentsArray = project.content;
    const { id } = useParams();
    const dispatch = useDispatch();
      
    const Project = (project) => {
        if (loading) {
        return (
            <Oval
                height={500}
                width={50}
                color="#4fa94d"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor="#4fa94d"
                strokeWidth={2}
                strokeWidthSecondary={2}
            /> 
        )} else {
            return (
                <StyledItem 
                key={project.thumbnail}         
                >
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
                        <a className='mobileLink' href={project.live_link} target="_blank">
                            <Globe /> 
                            <p>Live Website</p>
                        </a>
                        <a className='mobileLink' href={project.front_link} target="_blank">
                            <GitHub /> 
                            <p>Front End Code</p>
                        </a>
                        <a className='mobileLink' href={project.back_link} target="_blank">
                            <GitHub /> 
                            <p>Back End Code</p>
                        </a>
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
                        <h2>Users Are Able To</h2>
                        <div className='pWrapper' >
                            {contentsArray.map((content) => {
                                return (        
                                    <div className='contentItem' key={content}>
                                        <p>• {content}</p>
                                    </div>
                                ) 
                            })}
                        </div>
                        <h2 id='mobileH2'>Links</h2>
                        <div className='linkButtons'>
                        <a className='link' href={project.live_link} target="_blank">
                            <Globe /> 
                            <p>Live Website</p>
                        </a>
                        <a className='link' href={project.front_link} target="_blank"
                        style={{display: project.front_link === "" ? "none" : "flex"}}>
                            <GitHub /> 
                            <p>Front End Code</p>
                        </a>
                        <a className='link' href={project.back_link} target="_blank"
                        style={{display: project.back_link === "" ? "none" : "flex"}}>
                            <GitHub /> 
                            <p>Back End Code</p>
                        </a>
                        </div>
                    </div>
                </StyledItem>
            )
        } 
    };

    useEffect(() => {
        (async () => {
          const data = await dispatch(fetchSingleProject(id));
          setLoading(false)
        })();
      }, [dispatch]);

    return (
        <StyledWrapper>
            {Project(project)}
        </StyledWrapper>
    )
}

export default SingleProjectById





