import React from 'react';

const Application = ({ application }) => {

    const DescriptionUi = application.description.map((text, index) => <li key={index}>{text}</li>);

    const StackUi = application.stack.map((text, index) => <li key={index}>{text}</li>);

    const FeaturesUi = application.features.map((text, index) => <li key={index}>{text}</li>);

    return (

        <div className="application-container">

            <div className="application-container__img">
                <img src={application.img} alt="Application" className="img" />
            </div>

            <div className="application">
                <div className="title">
                    <img src={application.logo} alt={application.name} className="logo" />
                    <h1>{application.name}</h1>
                </div>

                <ul className="description__list">
                    {DescriptionUi}
                </ul>

                <div className="tech-container">

                    <div className="tech-container__stack">
                        <h3 className="tech__name">Stack that I've used</h3>

                        <ul className="tech-container__list">
                            {StackUi}
                        </ul>
                    </div>

                    <div className="tech-container__features">
                        <h3 className="tech__name">Some interesting features</h3>

                        <ul className="tech-container__list">
                            {FeaturesUi}
                        </ul>
                    </div>
                </div>

                <a href={application.link} className="link-button application__link">Try it out</a>
            </div>
        </div>
    );
}

export default Application;