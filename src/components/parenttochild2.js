import React, { Component } from 'react';

export default class ParentTwo extends Component {
    constructor(){
        super();
        this.state = {
            name: 'Balu P',
            updatedName: '',
            data: []
        }
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onChangeLocation = this.onChangeLocation.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeName(event) {
        this.setState({
            name: event.target.value
        });
    }

    onChangeAge(event) {
        this.setState({
            age: event.target.value
        });
    }

    onChangeLocation(e) {
        this.setState({
            location: e.target.value
        });
    }

    onSubmit(){
        this.setState({
            updatedName: this.state.name,
        data: {
            "name":this.state.name,
            "age":this.state.age,
            "location":this.state.location
        }        });
    }
    render() {
        return (
        <div className="container comp-page">
            <h1>Parent Div</h1>
            <input type="text" placeholder="enter name" value={this.state.name} onChange={this.onChangeName}/> <br /> <br />
            <input type="text" placeholder="enter Age" value={this.state.age} onChange={this.onChangeAge}/> <br /> <br />
            <input type="text" placeholder="enter location" value={this.state.location} onChange={this.onChangeLocation}/> <br /> <br />
            <button className="btn btn-success" onClick={this.onSubmit}>Update</button>
            <p>Display name: {this.state.name}</p>
            <p>Update Name: {this.state.updatedName}</p>
            <ChildTwo value={this.state.data} />

        </div>
        );
    }
}

class ChildTwo extends Component {
    constructor(){
        super();
    }
    render() {
        return (
            <div className="container">
            <h2>Child Div</h2>
            <p>Parent Data in Child Div</p>
            <p> <b>Name</b>:{this.props.value.name}</p>
            <p> <b>Age</b>:{this.props.value.age}</p>
            <p> <b>Location</b>:{this.props.value.location}</p>
            <SubChildTwo value={this.props.value} />
            </div>
        )
    }
}

class SubChildTwo extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <div className="container">
            <h2>Subchild</h2>
            <p>Parent Data in SubChild Div</p>
            <p> <b>Name</b>:{this.props.value.name}</p>
            <p> <b>Age</b>:{this.props.value.age}</p>
            <p> <b>Location</b>:{this.props.value.location}</p>
            <AnotherChild value={this.props.value} />
            </div>
        )
    }
}

class AnotherChild extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div><h1>Another Child</h1>
                      
            <p>Parent Data in AnotherCchild Div</p>
            <p> <b>Name</b>:{this.props.value.name}</p>
            <p> <b>Age</b>:{this.props.value.age}</p>
            <p> <b>Location</b>:{this.props.value.location}</p>
            </div>
        )
    }
}