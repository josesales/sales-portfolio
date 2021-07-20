import React from 'react';
import { intro } from '../data/stack';
import StackLoop from './StackLoop';

const Intro = () => {

    return (
        <div className="intro">

            <StackLoop array={intro} />
            <h1 className="heading-primary heading-primary--main">Full Stack Developer</h1>
            <div className="description">
                <p>Hi, my name is Sales. I am a passionate developer with a bachelor degree in Computer Science an overall experience of over a decade.</p>
                <p>As a Full Stack Developer, I am used to work as a Frontend, Backend developer as well and with relational and non-relational DBs.</p>
            </div>
        </div>
    );
}

export default Intro;