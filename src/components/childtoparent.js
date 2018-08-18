import React, { Component } from 'react';

export default class ParentThree extends Component {
    constructor(props){
        super(props);
        this.state={
            parentData:''
        }
this.updateParentData = this.updateParentData. bind(this);

        }
        updateParentData(data){
            this.setState({
                parentData: data
            });
    }
    render() {
        return (
            <div className="container comp-page"><h1>New Parent Div</h1>
            <p>Child Data from Parent: {this.state.parentData}</p>
            
            <ChildThree sendData={this.updateParentData} passedData='Hello'/>
            </div>
        );
    }
}


class ChildThree extends Component {

    constructor(props) {
        super(props);
        this.state = {
        name: 'Balu P',
        age: '30',
        updatedName: ''
        }

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
      
    }

        onChangeName(event) {
         this.setState({
         name: event.target.value
    });
    }

    onChangeAge(event){
        this.setState({
            age: event.target.value
        })
    }

    onSubmit(){
        this.setState({
            updatedName: this.state.name
        });
      this.props.sendData(this.state.name);
      this.props.sendData(this.state.age);
       }
     render(){
        return (
            <div className="container">
            <h1>New Child Div</h1>
            <input type="text" placeholder="Enter Name" value={this.state.name} onChange={this.onChangeName} rerf='nameChange'/>
            <input type="text" placeholder="Enter Age" value={this.state.age} onChange={this.onChangeAge} rerf='ageChange'/>
            <p>Display Name:{this.state.name}</p>

            <button className="btn btn-inverse" onClick={this.onSubmit} >Submit</button>
            <h4>Updated Value: {this.props.passedData}</h4>
            <h1>Child Value Updated: {this.state.updatedName}</h1>
            </div>
        );
    }
}