import React, { useEffect, useState } from 'react';
import frisbee from '../Assets/captain-america.png';
import guitar from '../Assets/guitar.png';
import code from '../Assets/programing.png';
import resume from '../Assets/resume.png';
import bake from '../Assets/baking.png';
import omelette from '../Assets/omelette.png';
import bio from '../Assets/biology.png';
import chem from '../Assets/chemical.png';
import fried from '../Assets/fried.png';
import mix from '../Assets/mixer.png';
import math from '../Assets/maths.png';
import reading from '../Assets/reading.png';
import bako from '../Assets/bako.jpg';

const hp = [
    { src: bio, label: 'biology', light: true },
    { src: chem, label: 'chemistry', light: true },
    { src: reading, label: 'learning', light: true },
    { src: math, label: 'math', light: true },
]

const foods = [
    { src: bake, label: 'bake', light: true },
    { src: fried, label: 'fry', light: true },
    { src: mix, label: 'mix', light: true },
    { src: omelette, label: 'omelette', light: true },
]

const About = (props) => {
    const [selectedFood, updateFood] = useState('');
    const [selectedHp, updateHp] = useState('');
    const { history } = props;

    useEffect(() => {
        randomize(foods, updateFood);
        randomize(hp, updateHp);
        startTimer();
        // eslint-disable-next-line
    }, []);

    const randomize = (arr, updateFn) => {
        let randomNum = Math.floor(Math.random() * arr.length);
        updateFn(arr[randomNum]);
    }

    const startTimer = () => {
        setInterval(() => {
            randomize(foods, updateFood);
            randomize(hp, updateHp);
        }, 600000);
    }

    return (
        <div className="about-page flex" style={{ backgroundImage: `url(${bako})` }}>
            <div className="about-inner-container justify-around set-top align-ctr">
                <p className="about-me-summary">
                    My name is Kevin Ung. I am a software engineer. I love serenading my neighborhood, watching Disney+, learning about various subjects, the sense of accomplishment after a good run or bike ride, cooking/baking a new delicious recipe, and casual tosses of a Frisbee or a Lacrosse ball.
                </p>
                <div className="about-me-container wrap">
                    <div onClick={() => history.push('/projects')} className="icon-container pointer">
                        <img src={code} alt="coding" />
                        <p>Web Developer</p>
                    </div>
                    <div onClick={() => history.push('/music')} className="icon-container pointer">
                        <img src={guitar} alt="guitar" />
                        <p>Cover Artist / Songwriter</p>
                    </div>
                    <div onClick={() => history.push('/resume')} className="icon-container pointer">
                        <img src={resume} alt="resume" />
                        <p>Resume Coach</p>
                    </div>
                    <a href="https://yourmove.dev/" target="_blank" rel="noopener noreferrer">
                        <div className="icon-container">
                            <img src={selectedHp.src} alt={selectedHp.label} />
                            <p>Ravenclaw at Heart</p>
                        </div>
                    </a>
                    <a href="https://yourmove.dev/#/cooking/recipes/" target="_blank" rel="noopener noreferrer">
                        <div className="icon-container">
                            <img src={selectedFood.src} alt={selectedFood.label} />
                            <p>Experimental Cook</p>
                        </div>
                    </a>
                    <div className="icon-container">
                        <img src={frisbee} alt="frisbee" />
                        <p>Ultimate Frisbee Enthusiast</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;