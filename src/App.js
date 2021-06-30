import React, { Component } from 'react';
import './styles/scss/App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './components/Home';

import CaseStudies from './components/CaseStudies';
import AppleStore from './components/projects/AppleStore';
import BlueHeron from './components/projects/BlueHeron';
import cPanel from './components/projects/cPanel';
import Hubbingtons from './components/projects/Hubbingtons';
import Merk from './components/projects/Merk';

import About from './components/About';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (      
       <BrowserRouter>
          <Navigation />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/case-studies" component={CaseStudies}/>
             <Route path="/apple-store" component={AppleStore} exact/>
             <Route path="/cpanel" component={cPanel} exact/>
             <Route path="/merk" component={Merk} exact/>
             <Route path="/hubbingtons" component={Hubbingtons} exact/>
             <Route path="/blue-heron" component={BlueHeron} exact/>
             <Route path="/about" component={About}/>
             <Route path="/contact" component={Contact}/>
            <Route component={Error}/>
           </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

var links = document.getElementsByTagName("a"); // more specific selector if other links
for (var i = 0; i < links.length; i++) {
    var link = links[i];
    link.onclick = function () {
        var prev = document.getElementsByClassName("active");
        if (prev && prev[0]) {
            prev[0].className = ""; // if using other classes, filter better
        }
        this.className += " active";
    };
}

export default App;