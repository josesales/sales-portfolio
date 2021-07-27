import React from 'react';
import { educationItems } from '../data/education';

const Education = () => {

    const EducationItemsUi = educationItems.map((item, index) =>
        <li key={index} className="education__item">
            <img src={item.img} alt={item.name} className="education__img" />
            <h3 className="education__name">{item.name}</h3>
        </li>);

    return (
        <div id="education" className="education section-margin-1">

            <h1 className="section-title heading-primary-animation">
                <span>Education</span>
            </h1>

            <ul className="education__list section-margin-2">
                {EducationItemsUi}
            </ul>
        </div>
    );
}

export default Education;