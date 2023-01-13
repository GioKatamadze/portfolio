import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { fetchTech } from '../../../store/actions/techActions.js';
import StyledHero from './HeroStyles.jsx';


const Hero = (props) => {
    const techs = useSelector((state) => state.techs.items);
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
    

    useEffect(() => {
        dispatch(fetchTech());
    }, [dispatch]);

    return (
        <StyledHero>
            <div className='titleWrapper'>
                <h1>Full Stack Developer</h1>
                <div className='ps'>
                    <p>Hello, I am Gio.</p> 
                    <p>As a developer, you'll find in me someone deeply enthusiastic about code architecture and performance.</p> 
                    <p>As a teammate, someone who values direct communication and likes to integrate and talk with everyone.</p> 
                    <p>My mission is to bring excellent project satisfaction by providing quality and professional work.</p>
                </div>

            </div>

            <div className='techWrapper'>
                <div className='techItems'>{listItems}</div>
            </div>
        </StyledHero>
    )
}

export default Hero
