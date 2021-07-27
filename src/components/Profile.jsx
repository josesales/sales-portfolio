import React from 'react';
import ProfilePhoto from '../assets/me.png';

const Profile = () => {

    return (
        <div className="profile section-margin-3">

            <img className="profile__img profile__img--animation" src={ProfilePhoto} alt="Me" />
            {/* <span className={intro[index].nameAnimation}>{intro[index].name}</span> */}
        </div>
    );
}

export default Profile;