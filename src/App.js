import React from 'react';
import { Helmet } from 'react-helmet';
import logo from './images/bick.png';
import eighttwentynine from './images/829.png';
import p1ws from './images/p1ws.png';
import lc from './images/loud-canvas.png';
import stacktron from './images/stacktron.png';
import './styles/scss/App.scss';

export default function Meta() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title data-react-helmet="true">My Title</title>
        <link
          rel="canonical"
          href="http://mysite.com/example"
          data-react-helmet="true"
        />
      </Helmet>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}


function App() {
  return (
    <main>
      <header class="header">
        <a class="bick" href="/"><img src={logo} /></a>
        <div class="titles">
          <h1>Hey there, I'm <span class="orange">Owen Bick</span> <span class="wave">👋</span></h1>
          <h1>I'm a UX designer and strategist based in Boston.</h1>
        </div>
      </header>
      <ul>
        <li><a href="//dribbble.com/bick" target="_blank">Dribbble</a></li>
        <li><a href="//twitter.com/owenbick" target="_blank">Twitter</a></li>
        <li><a href="//github.com/bick" target="_blank">GitHub</a></li>
        <li><a href="//linkedin.com/in/bick" target="_blank">LinkedIn</a></li>
        <li><a href="mailto:owenbick@gmail.com">Contact Me</a></li>
      </ul>
      <div class="spacer"></div>
      <section class="resume">
        <h1>My Resume 📝</h1>
        <div class="resume__job">
          <div class="resume__job__logo">
            <img src={eighttwentynine} class="resume__job__logo__img" />
          </div>
          <div class="resume__job__info">
            <h3>Account Manager (829 Studios)</h3>
            <small>Mar 2021 - present</small>
            <p>Managed multiple website development projects for various clients in a multitude of industries and sizes.</p>
          </div>
        </div>
        <div class="resume__job">
          <div class="resume__job__logo">
            <img src={p1ws} class="resume__job__logo__img" />
          </div>
          <div class="resume__job__info">
            <h3>Senior UX Designer (Page One Web Solutions)</h3>
            <small>Oct 2019 - Dec 2020</small>
            <p>Developed websites and helped transition to company to modern development tools such as React.</p>
          </div>
        </div>
        <div class="resume__job">
          <div class="resume__job__logo">
            <img src={lc} class="resume__job__logo__img" />
          </div>
          <div class="resume__job__info">
            <h3>UX Designer (Loud Canvas)</h3>
            <small>Jul 2018 - Aug 2019</small>
            <p>Lead small development and design team of 5 to build modern websites. I also designed the company's design strategy.</p>
          </div>
        </div>
        <div class="resume__job">
          <div class="resume__job__logo">
            <img src={stacktron} class="resume__job__logo__img" />
          </div>
          <div class="resume__job__info">
            <h3>UX Designer (Freelance)</h3>
            <small>Jul 2013 - Jul 2018</small>
            <p>Worked as a freelance UX designer for a number of companies throughout the beginning of my career.</p>
          </div>
        </div>
      </section>
      <div class="spacer"></div>
      <footer>
        <p>Copyright &copy; {new Date().getFullYear()} Owen Bick. All Rights Reserved.<br />Made with ❤️ &amp; ☕ in Boston</p>
      </footer>
    </main>
  );
}

export default App;
export Meta;