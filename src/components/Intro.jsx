import React from 'react';
import { intro } from '../data/stack';
import Profile from './Profile';
import StackLoop from './StackLoop';

const Intro = () => {

    return (
        <div id="intro" className="intro">

            <StackLoop array={intro} />

            <h1 className="section-title heading-primary-animation">
                <span>Full Stack</span>
                <span> Developer</span>
            </h1>

            <div className="intro__description section-margin-2 secondary-background">
                <p>Hi, my name is Sales. I am a passionate developer with a bachelor degree in Computer Science and an overall experience of over a decade.</p>
                <p>As a Full Stack Developer, I am used to work as a Frontend, Backend developer as well and with relational and non-relational DBs.</p>
            </div>

            <Profile />
        </div>
    );
}

export default Intro;