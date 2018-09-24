import React from 'react';

import { ICONS } from '../assets/ICONS';
import Icon from '../components/Icon';

const home = () => (
    <section className="home section flex">
        <div className="flex">
            <h1 className="header">Hello, I'm <span className="secondary">Yousef Jalali</span><br />I'm a front-end web developer</h1>
            <a className="button flex row">
                <span>View my work</span>
                <div className="icon"><Icon icon={ICONS.arrow} transform="translate(3, 3)" size="24" color="white" /></div>
            </a>
        </div>
    </section>
)

export default home;