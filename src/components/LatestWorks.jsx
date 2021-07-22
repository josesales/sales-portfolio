import React from 'react';
import FollowingEyes from './FollowingEyes';

const LatestWorks = () => {

    return (
        <div id="latest-works" className="latest-works">
            <h1 className="heading-primary">Latest Works</h1>

            <div className="description">
                <p>Enough of talking! Now you can try some of the latest web applications that I have built from scratch and by myself </p>
                {/* <p>As a Full Stack Developer, I am used to work as a Frontend, Backend developer as well and with relational and non-relational DBs.</p> */}
            </div>

            <FollowingEyes />

        </div>
    );
}

export default LatestWorks;