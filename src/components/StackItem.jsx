import React from 'react';

const StackItem = ({ title, icon, stackItems }) => {

    const StackItemsUi = stackItems.map((item, index) => <li className="stack-item__item" key={index}>{item}</li>);

    return (
        <div className="stack-item secondary-background">

            <div className="stack-item__title">

                <img src={icon} alt={title} className="stack-item__img" />
                <h1>{title}</h1>
            </div>

            <ul className="stack-item__list">
                {StackItemsUi}
            </ul>
        </div>
    );
}

export default StackItem;