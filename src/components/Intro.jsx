import React from 'react';
import { intro } from '../data/stack';
import StackLoop from './StackLoop';

const Intro = () => {

    return (
        <div className="intro">

            <StackLoop array={intro} />

            <h1 className="title heading-primary heading-primary--main">
                <span>Full Stack</span>
                <span> Developer</span>
            </h1>

            <div className="description">
                <p>Hi, my name is Sales. I am a passionate developer with a bachelor degree in Computer Science and an overall experience of over a decade.</p>
                <p>As a Full Stack Developer, I am used to work as a Frontend, Backend developer as well and with relational and non-relational DBs.</p>
            </div>
        </div>
    );
}

export default Intro;