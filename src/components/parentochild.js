import React, { Component } from 'react';

export default class Parent extends Component {

    constructor() {
        super();
        this.state = {
            parentData: "This is parent data"
        }
    }
    render() {
        return (
            <div className="container comp-page"><h1>Parent Component</h1>
            <Child DataFromParent={this.state.parentData} /></div>
        );
    }
}

class Child extends Component {
    render() {
        return (
            <div className="container ">
            <h2>Child Component</h2>
            <h6>Below data from Parent</h6>
            <p> Data From Parent is: <b>{this.props.DataFromParent}</b></p>
            </div>
        );
    }
}