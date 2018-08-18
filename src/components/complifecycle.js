import React, { Component } from 'react';

export default class LifeCycle extends Component {
constructor(props) {
    super(props);
    this.state = {
        data: 0
    }

    this.formSubmit = this.formSubmit.bind(this);
}
componentWillMount() {
    console.log('Component WILL MOUNT!')
 }
 componentDidMount() {
    console.log('Component DID MOUNT!')
 }
 componentWillReceiveProps(newProps) {    
    console.log('Component WILL RECIEVE PROPS!')
 }
 shouldComponentUpdate(newProps, newState) {
    return true;
 }
 componentWillUpdate(nextProps, nextState) {
    console.log('Component WILL UPDATE!');
 }
 componentDidUpdate(prevProps, prevState) {
    console.log('Component DID UPDATE!')
 }
 componentWillUnmount() {
    console.log('Component WILL UNMOUNT!')
 }

formSubmit(){
    this.setState({
data: this.state.data +1
    });
}
    render(){
        return(
            <div className="container comp-page"><h1>Component Life Cycle</h1>

            <button className="btn btn-success" onClick={this.formSubmit}>Increment</button>
            <h1>New Number: {this.state.data} </h1>
       
            </div>
        )
    }
}
