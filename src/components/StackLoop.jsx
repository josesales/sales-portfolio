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

        return () => clearInterval(intervalId);
    }, [array.length, index]);


    return (
        <div className="stack-loop">
            <img className={intro[index].iconAnimation} src={intro[index].icon} alt="Stack" />
            <span className={intro[index].nameAnimation}>{intro[index].name}</span>
        </div>
    );
}

export default StackLoop;