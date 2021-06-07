import logo from './images/bick.png';
import eighttwentynine from './images/829.png';
import p1ws from './images/p1ws.png';
import lc from './images/loud-canvas.png';
import stacktron from './images/stacktron.png';
import './styles/scss/App.scss';

function App() {
  return (
    <main>
      <header class="header">
        <a class="bick" href="/"><img src={logo} /></a>
        <div class="titles">
          <h1>Hey there, I'm <span class="orange">Owen Bick</span> <span class="wave">👋</span></h1>
          <h1>I'm a frontend developer and UX manager based in Boston.</h1>
        </div>
      </header>
      <ul>
        <li><a href="//github.com/bick" target="_blank">GitHub</a></li>
        <li><a href="//twitter.com/owenbick" target="_blank">Twitter</a></li>
        <li><a href="//producthunt.com/@bick" target="_blank">ProductHunt</a></li>
        <li><a href="//linkedin.com/in/bick" target="_blank">LinkedIn</a></li>
        <li><a href="/cdn-cgi/l/email-protection#1a3c392b2a23213c39232d213c392b2a2f213c392b2a22213c392b2b2c213c392b2b2b213c392f22213f2c5c3f2d2d3f2c2f3f2c5f3f2c283f2c233f2c293f2c583f2e2a3f2c2d3f2c5e3f2c2b3f2c233f2c593f285f3f2c293f2c5c3f2c5e">Contact Me</a></li>
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
            <h3>Frontend Developer (Page One Web Solutions)</h3>
            <small>Oct 2019 - Dec 2020</small>
            <p>Developed websites and helped transition to company to modern development tools such as React.</p>
          </div>
        </div>
        <div class="resume__job">
          <div class="resume__job__logo">
            <img src={lc} class="resume__job__logo__img" />
          </div>
          <div class="resume__job__info">
            <h3>Lead Frontend Developer &amp; UX Manager (Loud Canvas)</h3>
            <small>Jul 2018 - Aug 2019</small>
            <p>Lead small development and design team of 5 to build modern websites. I also designed the company's design strategy.</p>
          </div>
        </div>
        <div class="resume__job">
          <div class="resume__job__logo">
            <img src={stacktron} class="resume__job__logo__img" />
          </div>
          <div class="resume__job__info">
            <h3>Co-Founder (Stacktron)</h3>
            <small>Jul 2014 - Sep 2015</small>
            <p>Founded company in high school and grew the company until its acquisition in 2015. I also developed the technology infrastructure required to run a scaleable cloud management company.</p>
          </div>
        </div>
      </section>
      <div class="spacer"></div>
      <section class="contact">
        <h1>Contact Me</h1>
        <form method="post">
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>
              Your Name: <input type="text" name="name" placeholder="Tim Apple" />
            </label>
          </p>
          <p>
            <label>
              Your Email: <input type="email" name="email" placeholder="tim@apple.com" />
            </label>
          </p>
          <p>
            <label>
              Message: <textarea name="message" placeholder="Owen, would you like to become CEO of Apple?" />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </section>
      <div class="spacer"></div>
      <footer>
          <p>Copyright &copy; {new Date().getFullYear()} Owen Bick. All Rights Reserved.<br />Made with ❤️ in Boston</p>
      </footer>
    </main>
  );
}

export default App;