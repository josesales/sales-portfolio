import React, { useEffect, useRef } from 'react';

const FollowingEyes = () => {

    const eyesRef = useRef(null);
    useEffect(() => {
        document.addEventListener('mousemove', event => {

            const balls = eyesRef.current.querySelectorAll('.ball');

            var x = event.clientX * 100 / window.innerWidth + "%";
            var y = event.clientY * 100 / window.innerHeight + "%";
            balls.forEach(ball => {
                ball.style.left = x;
                ball.style.top = y;
                ball.style.transform = "translate(-" + x + ",-" + y + ")";
            });
        });

        return () => {
            document.removeEventListener('mousemove', () => { });
        }
    }, []);

    return (
        <div className="following-eyes">

            <div ref={eyesRef} className="eyes">
                <div className="eye">
                    <div className="ball"></div>
                </div>
                <div className="eye">
                    <div className="ball"></div>
                </div>
            </div>
        </div>
    );
}

export default FollowingEyes;