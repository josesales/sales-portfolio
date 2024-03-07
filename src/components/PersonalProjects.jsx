import React from 'react';
import { applicationItems } from '../data/personalProjects';
import Application from './Application';
import FollowingEyes from './FollowingEyes';

const PersonalProjects = () => {

    const ApplicationItemsUi = applicationItems.map((application, index) =>
        <Application key={index} application={application} />);

    return (
        <div id="personal-projects" className="personal-projects section-margin-1">
            <h1 className="section-title heading-primary">
                <span>Personal</span>
                <span> Projects</span>
            </h1>

            <div className="description-container section-margin-2 secondary-background">
                    <p>Enough of talking! Now you can try some of the web applications that I have built by myself from scratch.</p>
                    <p>These applications contain key features which modern companies implement on their own applications.</p>
            </div>

            <p className="section-margin-3 personal-projects__dev-fun secondary-background">Web Development is Fun!</p>

            <FollowingEyes />

            <div className="applications-container">
                {ApplicationItemsUi}
            </div>
        </div>
    );
}

export default PersonalProjects;