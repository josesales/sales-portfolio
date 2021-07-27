import React from 'react';
import { companies1, companies2 } from '../data/companies';

const Companies = () => {

    const CompaniesItemsUi1 = companies1.map((img, index) =>
        <li key={index}><img src={img} alt="company" className="companies__img" /></li>);

    const CompaniesItemsUi2 = companies2.map((img, index) =>
        <li key={index}><img src={img} alt="company" className="companies__img" /></li>);

    return (
        <div id="companies" className="companies section-margin-1">

            <h1 className="section-title heading-primary-animation">
                <span>Where</span>
                <span> I've Worked</span>
            </h1>

            <div className="section-margin-2 secondary-background">
                <p>Some of the companies that I'm proud to have collaborated as a Software Developer.</p>
            </div>

            <ul className="companies__list section-margin-2">
                {CompaniesItemsUi1}
            </ul>

            <ul className="companies__list section-margin-3">
                {CompaniesItemsUi2}
            </ul>

        </div>
    );
}

export default Companies;