import React from 'react';

const Navigation = () => {
    return (
        <header class="header global">
            <div class="container">
                <div class="header__main-menu">
                    <ul>
                        <li>
                            <a href="/" class="logo">Owen Bick</a>
                        </li>
                    </ul>
                    <ul class="right">
                        <li>
                            <a href="/case-studies">Case Studies</a>
                        </li>
                        <li>
                            <a href="/about">About</a>
                        </li>
                        <li>
                            <a href="//medium.com/@bick" target="_blank" rel="noreferrer">Blog</a>
                        </li>
                        <li>
                            <a href="/contact">Contact</a>
                        </li>
                    </ul>
                </div>
                <div class="header__secondary-menu">
                    <ul>
                        <li>
                            <a href="/">← Go back home</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Navigation;