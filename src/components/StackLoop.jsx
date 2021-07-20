import React, { useEffect, useState } from 'react';
import { intro } from '../data/stack';

const StackLoop = ({ array }) => {

    const [index, setIndex] = useState(0);

    useEffect(() => {

        const intervalId = setInterval(() => {

            if (index + 1 === array.length) {
                setIndex(0);
            } else {
                setIndex(index + 1);
            }
        }, 5000);

        return () => clearTimeout(intervalId);
    }, [array.length, index]);


    return (
        <div className="stack-loop">
            <img className="stack-loop__img" src={intro[index].icon} alt="Stack" />
            <span className="stack-loop__name">{intro[index].name}</span>
        </div>
    );
}

export default StackLoop;