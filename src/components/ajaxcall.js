import React, { Component } from  'react';
import $ from "jquery";

export default class AjaxCall extends Component {
    constructor(){
        super();
        this.state = {
            data: []
        }
    }
 componentDidMount() {
     $.ajax({
         url: "http://jsonplaceholder.typicode.com/posts",
         type: "GET",
         dataType: 'json',
         success: function(data) {
             this.setState({data: data});
         }.bind(this),
         error: function(error) {
             console.log(error);
         }.bind(this)
         })
         }
    
 
    render() {
        return (
            <div className="container comp-page">
            <h2>Ajax Call</h2>
            <table className="table table-bordered">
            <tbody>
                {this.state.data.map(function(item, key) {
                    return (
                        <tr key = {key}>
                        <td>{item.userId}</td>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.body}</td>
                        </tr>
                    )
                })}
            </tbody>
            </table>
            </div>
        )
    }
} 