import React from 'react';
import { applicationItems } from '../data/latestWorks';
import Application from './Application';
import FollowingEyes from './FollowingEyes';

const LatestWorks = () => {

    const ApplicationItemsUi = applicationItems.map((application, index) =>
        <Application key={index} application={application} />);

    return (
        <div id="latest-works" className="latest-works section-margin-1">
            <h1 className="section-title heading-primary">
                <span>Latest</span>
                <span> Works</span>
            </h1>

            <div className="description-container section-margin-2 secondary-background">
                    <p>Enough of talking! Now you can try some of the web applications that I have built by myself from scratch.</p>
                    <p>These applications contain key features which modern companies implement on their own applications.</p>
            </div>

            <p className="section-margin-3 latest-works__dev-fun secondary-background">Web Development is Fun!</p>

            <FollowingEyes />

            <div className="applications-container">
                {ApplicationItemsUi}
            </div>
        </div>
    );
}

export default LatestWorks;