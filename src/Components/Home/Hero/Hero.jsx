import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { fetchTech } from '../../../store/actions/techActions.js';
import { fetchSkill } from '../../../store/actions/skillActions.js';
import StyledHero from './HeroStyles.jsx';


const Hero = (props) => {
    const techs = useSelector((state) => state.techs.items);
    const skills = useSelector((state) => state.skills.items);
    const dispatch = useDispatch();
    
    const listItems = techs.map((tech) => {
        return (        
            <div className='li' key={tech.name}>
                <img
                    src={process.env.REACT_APP_API_URL + "/icons/" + tech.icon}
                    alt="carousel slide"
                />
                {tech.name}
            </div>
        ) 
    });

    const listSkills = skills.map((skill) => {
        return (        
            <div className='li' key={skill.name}>
                <img
                    src={process.env.REACT_APP_API_URL + "/icons/" + skill.icon}
                    alt="carousel slide"
                />
                {skill.name}
            </div>
        ) 
    });
    

    useEffect(() => {
        dispatch(fetchTech())
        dispatch(fetchSkill());
    }, [dispatch]);

    return (
        <StyledHero>
            <div className='titleWrapper'>
                <h1>Full Stack Developer</h1>
                <div className='techWrapper'>
                    <div className='techItems'>{listItems}</div>
                </div>
            </div>
            
            <div className='andWrapper' >
                <div className='and'>&</div>
            </div>

            <div className='titleWrapper2'>
                <h1>Business Manager</h1>
                <div className='techWrapper2'>
                    <div className='techItems2'>{listSkills}</div>
                </div>
            </div>

        </StyledHero>
    )
}

export default Hero
