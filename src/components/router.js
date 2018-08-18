import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Firstcomp from './firstcomp';
import ClickEvent from './clickevent';
import AjaxCall from './ajaxcall';
import AjaxCallAxios from './ajaxcallaxios';
import ParentThree from './childtoparent';
import Parent from './parentochild';
import FormSubmit from './formsubmit';
import ParentTwo from './parenttochild2';
import LifeCycle from './complifecycle';
import MainHeader from './header';


export default class Routers extends Component {
    render(){
        return(
            <Router>
            <div>
        
                <Switch>
                   <Route exact path='/firstcomp' component={Firstcomp} />
                   <Route exact path='/clickevent' component={ClickEvent} />
                    <Route exact path='/ajaxcall' component={AjaxCall} />
                    <Route exact path='/ajaxcallaxios' component={AjaxCallAxios} />
                    <Route exact path='/childtoparent' component={ParentThree} />
                    <Route exact path='/parentochild' component={Parent} />
                    <Route exact path='/formsubmit' component={FormSubmit} />
                    <Route exact path='/parenttochild2' component={ParentTwo} />
                    <Route exact path='/complifecycle' component={LifeCycle} />
                    <Route exact path='/header' component={MainHeader} />
              
                </Switch>
            </div>
            </Router>
        )
    }
}