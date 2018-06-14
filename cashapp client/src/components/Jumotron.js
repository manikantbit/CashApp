import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Image from'./slider.jpg';
import {Link,withRouter,Route} from 'react-router-dom';
import Login from'./Login';
import Image2 from'./cashapp.png';
//import { Route, withRouter } from 'react-router-dom';
import Image1 from'./image1.jpg';
class Jumbotron extends Component {

    static propTypes = {
        message: PropTypes.string.isRequired
    };

    render() {
        return (
            
            <div className="jumbotron">
              
              <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="http://localhost:3001" data-slide-to="0" class="active"></li>
    <li data-target="http://localhost:3001" data-slide-to="1"class="active"> </li>
    <li data-target="http://localhost:3001" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src={Image} height="400" width="700"alt="First slide"></img>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={Image1}  height="400" width="1000"alt="Second slide"></img>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={Image2} height="400" width="1000" alt="Third slide"></img>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>

<div className="text-center">

<h2></h2>

    </div>

              {/* <img src={Image} height="400" width="1000"alt="dint load"></img> */}
              <h1><font color="dodgerblue"></font></h1> 
              <br/>
              <button  className="btn btn-outline-primary" onClick={() => {
                        window.location.href="http://localhost:3001/login";
                            
                        }}>
                            Deposit Money
                        </button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                        <button className="btn btn-outline-primary" onClick={() => {
                            window.location.href="http://localhost:3001/login";
                            
                        }}>
                        Withdraw Money
                        </button>  
              
              </div>
            
           
                
             
        );
    }
}

export default Jumbotron;