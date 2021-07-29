import React from 'react';
import './Header.css';

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://i.im.ge/2021/07/29/I3cpm.png" alt="Streamy" />
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://miro.medium.com/fit/c/1360/1360/1*VQiygngj75axFvMKuxn-UQ.png" />
                </a>
            </div>
        </header>
    );
}