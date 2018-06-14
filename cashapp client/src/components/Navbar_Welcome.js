import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Image from './cashapp.png';

class Navbar_Welcome extends Component {
  static propTypes = {
    logout:PropTypes.func.isRequired 
};

  state = {
    rowData : [],
    username : this.props.username,
    email_address: this.props.email_address
};

componentWillMount(){
    
    //call API to get project
    //set response of API to any state variable
    this.setState({
        username : localStorage.getItem('username'),
        email_address: localStorage.getItem('email_address')
       
    });
    //document.title = `Welcome, ${this.state.username} !!`;
}

    

    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">

  <a className="navbar-brand" href="http://localhost:3001/"><img src={Image}height ='60' width='130'></img></a>

  
  <ul className="navbar-nav">
   
    
    
    <li className="nav-item">
      <a className="nav-link" href="http://localhost:3001/account">My Balance</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="http://localhost:3001/account">Account</a>
    </li>
    
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

   
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="" id="navbardrop" data-toggle="dropdown">
       {this.state.username}
      </a>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="active">Link 1</a>
        <a className="dropdown-item" href="#">Link 2</a>
        <a className="dropdown-item" href="#">Link 3</a>
      </div>
    </li>
    
    <li className="nav-item">
    <button type="button" className="btn btn-primary"
               onClick={() => this.props.logout(this.state)}
                >Logout</button>
    </li>
  </ul>
</nav>

  


        );
    }
}

export default Navbar_Welcome;