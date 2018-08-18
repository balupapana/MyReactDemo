import React, { Component } from  'react';
import $ from "jquery";
import Axios from '../../node_modules/axios';

export default class AjaxCallAxios extends Component {
    constructor(){
        super();
        this.state = {
            data: []
        }
    }
 componentDidMount() {
Axios.get('https://jsonplaceholder.typicode.com/photos')
.then((data)=>{
    this.setState({
        data:data.data
    })
})
         }
    
 
    render() {
        return (
            <div className="container comp-page">
            <h2>Ajax Call Axios</h2>
            <table className="table table-bordered table-hover table-striped">
            <thead>
                <tr>
                    <th>Album ID</th>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Image</th>
                    <th>ThumbNail</th>
                    </tr>
            </thead>
            <tbody>
                {this.state.data.map(function(item, key) {
                    return (
                        <tr key = {key}>
                        <td>{item.albumId}</td>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.url}</td>
                        <td>{item.thumbnailUrl}</td>
                        </tr>
                    )
                })}
            </tbody>
            </table>
            </div>
        )
    }
} 