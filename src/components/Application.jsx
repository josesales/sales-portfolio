import React, { useEffect, useState } from "react";
import useResize from "../hooks/useResize";

const Application = ({ application }) => {
  const [imageSrc, setImageSrc] = useState("");
  const { width } = useResize();
  const DescriptionUi = application.description.map((text, index) => (
    <li key={index}>{text}</li>
  ));

  const StackUi = application.stack.map((text, index) => (
    <li key={index}>{text}</li>
  ));

  const FeaturesUi = application.features.map((text, index) => (
    <li key={index}>{text}</li>
  ));

  useEffect(() => {
    const loadImage = async () => {
      if (width <= 600) {
        setImageSrc(application.imgPhone);
      } else if (width <= 900) {
        setImageSrc(application.imgTabPort);
      } else if (width <= 1200) {
        setImageSrc(application.imgTabLand);
      } else {
        setImageSrc(application.imgRegular);
      }
    };

    loadImage();
  }, [width, application]);

  return (
    <div className="application-container section-margin-3">
      <div className="application-container__img">
        <img src={imageSrc} alt="Application" className="img" />
      </div>

      <div className="application">
        <div className="title">
          <img src={application.logo} alt={application.name} className="logo" />
          <h1>{application.name}</h1>
        </div>

        <ul className="description__list">{DescriptionUi}</ul>

        <div className="tech-container">
          <div className="tech-container__stack">
            <h3 className="tech__name">Stack</h3>

            <ul className="tech-container__list">{StackUi}</ul>
          </div>

          <div className="tech-container__features">
            <h3 className="tech__name">Key Features</h3>

            <ul className="tech-container__list">{FeaturesUi}</ul>
          </div>
        </div>
        <div className="application__button-container">
          <a
            href={application.link}
            target="_blank"
            className="link-button"
            rel="noreferrer"
          >
            Try it
          </a>
          <a
            href={application.gitHub}
            target="_blank"
            className="link-button"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Application;
