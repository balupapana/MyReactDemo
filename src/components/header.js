import React, { Component } from 'react'

export default class MainHeader extends Component {
    render(){
      return (
        <div>
      <Banner />
    
      </div>
      )
    }
  }
  
   class Banner extends Component {
    render() {
      return (
        <div className="banImg">
          <img src={'https://cdn-images-1.medium.com/max/1000/1*MdOuMPSdHlBdHz9QdJA_gg.jpeg'} />
       
        </div>
      )
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