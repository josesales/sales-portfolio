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

                <div className="description-container__intro">
                    <p>Enough of talking! Now you can try some of the latest web applications that I have built by myself from scratch.</p>
                </div>
                <div className="description-container__dev">
                    <p>Web Development is Fun!</p>
                </div>
            </div>

            <FollowingEyes />

            <div className="applications-container">
                {ApplicationItemsUi}
            </div>
        </div>
    );
}

export default LatestWorks;