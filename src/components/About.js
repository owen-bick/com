import React from 'react';
import { Helmet } from 'react-helmet';
import '../styles/scss/App.scss';

import eighttwentynine from '../images/829.png';
import p1ws from '../images/p1ws.png';
import lc from '../images/loud-canvas.png';
import freelance from '../images/freelance.png';
import champlain from '../images/champlain.png';
import owen from '../images/owen.jpg';

const Resume = () => {
    return (
        <>
            <div className="App">
                <Helmet>
                    <meta charSet="utf-8" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" data-react-helmet="true" />
                    <title data-react-helmet="true">About - Owen Bick</title>
                    <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" data-react-helmet="true" />
                    <link rel="canonical" href="https://owenbick.com" data-react-helmet="true" />
                    <meta property="og:site_name" content="Owen Bick" data-react-helmet="true" />
                    <meta property="og:title" content="Owen Bick" data-react-helmet="true" />
                    <meta property="og:url" content="https://owenbick.com" data-react-helmet="true" />
                    <meta property="og:type" content="website" data-react-helmet="true" />
                    <meta property="og:description"
                        content="Owen Bick is a product manager, developer, designer, real estate professional, and micro investor based in Boston." data-react-helmet="true" />
                    <meta property="og:image" content="https://owenbick.com/static/owenbick.png" data-react-helmet="true" />
                    <meta itemprop="name" content="Owen Bick" data-react-helmet="true" />
                    <meta itemprop="url" content="https://owenbick.com" data-react-helmet="true" />
                    <meta itemprop="description"
                        content="Owen Bick is a product manager, developer, designer, real estate professional, and micro investor based in Boston." data-react-helmet="true" />
                    <meta itemprop="thumbnailUrl" content="https://owenbick.com/static/owenbick.png" data-react-helmet="true" />
                    <link rel="image_src" href="https://owenbick.com/static/owenbick.png" data-react-helmet="true" />
                    <meta itemprop="image" content="https://owenbick.com/static/owenbick.png" data-react-helmet="true" />
                    <meta name="twitter:title" content="Owen Bick" data-react-helmet="true" />
                    <meta name="twitter:image" content="https://owenbick.com/static/owenbick.png" data-react-helmet="true" />
                    <meta name="twitter:url" content="https://owenbick.com" data-react-helmet="true" />
                    <meta name="twitter:card" content="summary" data-react-helmet="true" />
                    <meta name="twitter:description"
                        content="Owen Bick is a product manager, developer, designer, real estate professional, and micro investor based in Boston." data-react-helmet="true" />
                    <meta name="description"
                        content="Owen Bick is a product manager, developer, designer, real estate professional, and micro investor based in Boston." data-react-helmet="true" />
                </Helmet>
            </div>
            <section class="resume">
                <div class="container">
                    <h1>About Owen Bick</h1>
                    <div class="resume__about">
                        <p>I'm a UX and product designer that currently lives in Boston. I've helped many companies build digital products that are more human. My philosophy is simple: design products in a way that allows someone to use the product for the first time and feel like they understand what they're looking at. They don't need to be experts, but a digital product should not be overwhelming. Currently, I work at <a href="//829studios.com">829 Studios</a>.<br /><br />I have done web development as a hobby for about six years (this site is built in React and is publically available on my <a href="//github.com/bick/website">GitHub</a>) so I know the tech jargon that matters to be a successful UX designer.</p>
                        <img src={owen} class="resume__about__img" alt="Owen Bick" />
                        <small>That's me giving a presentation about design psychology, specifically geared towards millennial customers, circa 2019.</small>
                    </div>
                    <h1 class="resume-header">My Resume</h1>
                    <div class="resume__job">
                        <div class="resume__job__logo">
                            <img src={eighttwentynine} class="resume__job__logo__img" alt="829 Studios" />
                        </div>
                        <div class="resume__job__info">
                            <h3>Account Manager (829 Studios)</h3>
                            <small>Mar 2021 - Present</small>
                            <p>I manage website and digital product projects for a large number of clients. I have worked with brands such as Liberty Mutual, the Boston Red Sox, Northeastern University, among others.
                            </p>
                        </div>
                    </div>
                    <div class="resume__job">
                        <div class="resume__job__logo">
                            <img src={p1ws} class="resume__job__logo__img" alt="Page One Web Solutions" />
                        </div>
                        <div class="resume__job__info">
                            <h3>Senior UX Designer (Page One Web Solutions)</h3>
                            <small>Oct 2019 - Dec 2020</small>
                            <p>
                                Designed websites and digital products and helped transition to company to modern
                                design tools such as Figma and Sketch. Additionally, I mentored younger designers and help push the company in a modern direction.
                            </p>
                        </div>
                    </div>
                    <div class="resume__job">
                        <div class="resume__job__logo">
                            <img src={lc} class="resume__job__logo__img" alt="Loud Canvas Media" />
                        </div>
                        <div class="resume__job__info">
                            <h3>UX Designer (Loud Canvas)</h3>
                            <small>Jul 2018 - Aug 2019</small>
                            <p>
                                Lead small design and design team of 5 to design modern
                                websites and mobile apps. I also developed the company's design strategy.
                            </p>
                        </div>
                    </div>
                    <div class="resume__job">
                        <div class="resume__job__logo">
                            <img src={freelance} class="resume__job__logo__img" alt="Freelance" />
                        </div>
                        <div class="resume__job__info">
                            <h3>UX Designer (Freelance)</h3>
                            <small>Jul 2013 - Jul 2018</small>
                            <p>
                                Worked as a freelance UX designer for a number of companies
                                throughout the beginning of my career.
                            </p>
                        </div>
                    </div>
                    <p>Education</p>
                    <div class="resume__job">
                        <div class="resume__job__logo">
                            <img src={champlain} class="resume__job__logo__img" alt="Champlain College" />
                        </div>
                        <div class="resume__job__info">
                            <h3>B.S. Business Management (Champlain College)</h3>
                            <small>2018 - 2021</small>
                            <p>Worked full-time while in college full-time.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Resume;