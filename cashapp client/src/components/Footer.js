import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Image from'./image1.jpg';
import {Link,withRouter,Route} from 'react-router-dom';
import Login from'./Login';
//import { Route, withRouter } from 'react-router-dom';
class Jumbotron extends Component {

    static propTypes = {
        message: PropTypes.string.isRequired
    };

    render() {
        return (
            
            

      
    
    <div className="footer-copyright py-3 text-center">
        © 2018 Copyright:CMPE273
        
    </div>
    



                    
                  
                
             
        );
    }
}

export default Jumbotron;