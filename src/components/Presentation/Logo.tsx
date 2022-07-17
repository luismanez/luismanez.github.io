import React from 'react';
import logo from '../../images/lm-logo-50x50-white.png';
import '../../styles/App.css';

const Logo = ({}) => {
    return (<div className='logo' id='home'>
        <img src={logo} alt="Luis Mañez logo" />
    </div>)
};

export default Logo;