import React from 'react';

const Footer = () => {
    return (
        <footer class="footer">
            <div class="container">
                <div class="footer__links">
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/case-studies">Case Studies</a>
                        </li>
                        <li>
                            <a href="/about">About</a>
                        </li>
                        <li>
                            <a href="/contact">Contact</a>
                        </li>
                        <li>
                            <a href="//medium.com/@bick">Blog</a>
                        </li>
                        <li>
                            <a href="//dribbble.com/bick">Dribbble</a>
                        </li>
                        <li>
                            <a href="//twitter.com/owenbick">Twitter</a>
                        </li>
                        <li>
                            <a href="//linkedin.com/in/bick">LinkedIn</a>
                        </li>
                    </ul>
                </div>
                <div class="footer__copy">
                    <p>Copyright &copy; 2021 Owen Bick. All Rights Reserved.<br />Made with ❤️ &amp; ☕ in Boston</p>
                </div>
            </div>
        </footer>

    );
}


export default Footer;