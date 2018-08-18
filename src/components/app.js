import React, { Component } from 'react';
import $ from "jquery";


export default class App extends Component {
  render() {
    return (
      <div>
               <div><nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="/header">REACT DEMO</a>
          </div>
          <ul className="nav navbar-nav">
            <li className=""><a href="/firstcomp">First Component</a></li>

            <li><a href="/clickevent">ClickEvent</a></li>
            <li><a href="/formsubmit">Form Submit</a></li>
            <li><a href="/ajaxcall">AjaxCall</a></li>
            <li><a href="/ajaxcallaxios">Ajax Axios</a></li>
            <li><a href="/childtoparent">Child To Parent</a></li>
            <li><a href="/parentochild">Parent To Child</a></li>
            <li><a href="/parenttochild2">Parent To Child Two</a></li>
            <li><a href="/complifecycle">Comp Life Cycle</a></li>
          </ul>
        </div>
      </nav>

      </div>
<Footer />
      </div>
    );
  }
}

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer">
  <div className="container">
    Copyrights Reserved @2018 | abc@gmail.com
  </div>
</footer>
      </div>
    )
  }
}
