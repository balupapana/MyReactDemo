import React,  { Component } from 'react';

export default class ClickEvent extends Component {
    constructor() {
        super();
        this.state={
            name: 'Balu',
            age: '32',
            location: 'Hyderabad'
       
        }

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onChangeLocation = this.onChangeLocation.bind(this);
            
    }
onChangeName(event){
    this.setState({
        name: event.target.value
    });
}
onChangeAge(event){
    this.setState({
        age: event.target.value
    });
}
onChangeLocation(event){
    this.setState({
        location: event.target.value
    });
}
   
    render() {
  
        return (
<div className="container comp-page">
<div className="col-md-12">
<div className="col-sm-4">

  <h2>Horizontal form</h2>
  <div className="form-group">
  <label className="control-label">Name</label>
  <input type="text" placeholder="Enter Name" value={this.state.name} className="form-control" onChange={this.onChangeName}/>
</div>
<div className="form-group">
  <label className="control-label">Age</label>
  <input type="text" placeholder="Enter Age" value={this.state.age} className="form-control" onChange={this.onChangeAge}/>
</div>
<div className="form-group">
  <label className="control-label">Locatioin</label>
  <input type="text" placeholder="Enter Location" value={this.state.location} className="form-control" onChange={this.onChangeLocation}/>
</div>

</div>
<div className="col-sm-6">
<h1>Display Data</h1>
<h4>Name: {this.state.name}</h4>
<h4>Age: {this.state.age}</h4>
<h4>Location: {this.state.location}</h4>

</div>
</div>
</div>

       );
    }
}