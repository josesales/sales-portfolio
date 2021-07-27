import React from 'react';
import { backend, frontend, others } from '../data/stack';
import StackItem from './StackItem';
import FrontendIcon from '../assets/frontend.svg';
import BackendIcon from '../assets/backend.svg';
import OthersIcon from '../assets/others.svg';

const Stack = () => {

    return (
        <div id="stack" className="stack section-margin-1">

            <h1 className="section-title heading-primary">
                <span>My</span>
                <span> Stack</span>
            </h1>

            <div className="stack-item-container section-margin-2">
                <StackItem title="frontend" icon={FrontendIcon} stackItems={frontend} />
                <StackItem title="backend" icon={BackendIcon} stackItems={backend} />
                <StackItem title="others" icon={OthersIcon} stackItems={others} />
            </div>

        </div>
    );
}

export default Stack;