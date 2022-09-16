import React from "react";
import { Component } from "react";
//import { Link } from "react-router-dom";
//import newimg from '../../assets/img/new.jpg'

// components

 
class Landing extends Component {
  render() {
    const myStyle={
        backgroundImage: 
 "url('https://www.wallpapertip.com/wmimgs/83-838296_web-designer-professional-website-background-images.jpg')",
        height:'100vh',
        marginTop:'-70px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    return (
      <div style={myStyle}>
        <h1> geeksforgeeks </h1>
      </div>
    );
  }
}


   
export default Landing