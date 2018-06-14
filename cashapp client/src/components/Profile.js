import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link,withRouter} from 'react-router-dom';
import PostProject from './PostProject';
import Navbar from './Navbar';
import * as API from '../api/API';
import Navbar_Welcome from './Navbar_Welcome';
import '../App.css';
class Profile extends Component {

   
    static propTypes = {
        handleSubmit3:PropTypes.func.isRequired 
    };

    
    state = {
        rowData : [],
        image:this.props.image,
        username : this.props.username,
        email_address: '',
        about_me:'',
        skills:'',
        phone:'',
        name:''
    };

    componentWillMount(){
       
        API.getProfileDetails()
        .then(result=>{
            console.log(result);
            if(result===null)
            {
                this.setState({
                    name:'',
                    about_me:'',
                    skills:'',
                    phone:'',
                    email_address:''

                })
            }
            //console.log(result.email_address);
            //console.log(result.Name);
            else{
                      this.setState({
                          name:result.Name,
                     about_me:'' ||result.About_me,
                     skills:'' ||result.skills,
                     phone:'' ||result.Phone_Number,
                     name:'' ||result.Name,
                     email_address:'' ||result.email_address
                 });
                } 
        }
        );
                            

        this.setState({
            
            //res.data
            username : localStorage.getItem('username'),
            email_address: localStorage.getItem('email_address'),
            image:localStorage.getItem('image')
           
        });
        //document.title = `Welcome, ${this.state.username} !!`;
    }
    render() {
        return (
            <div className="container-fluid">
                <Navbar_Welcome/>
                <div className="left1">
                    <div className="left">
             <h5>  <b> Profile Image:</b></h5>
                <br/><img src={this.state.image} height='200' width='250'></img>
                <br/>
                <br/>
                <button className="btn btn-primary">Edit</button>
                </div>
                <div>
                <div className="row justify-content-md-center">
                
                    <form>
                        <br/>
                         <br/>
                        <h4> Profile details:</h4>
                         <br/>
                        
                         <br/> Name:<input
                                className="form-control"
                                type="text"
                                label="Username"
                                placeholder= "Enter First Name" 
                                value={this.state.name}
                                onChange={(event) => {      //setState is to change the state on some input
                                    this.setState({
                                        name: event.target.value
                                    });
                                }}
                                
                            />
                         <br/>
                         Email Address:<input
                                className="form-control"
                                type="text"
                                label="Username"
                                placeholder="Enter Email Address"
                                value={this.state.email_address}
                                onChange={(event) => {      //setState is to change the state on some input
                                    this.setState({
                                        email_address: event.target.value
                                    });
                                }}
                                
                            />
                            <br/>
                            Skillset:<input
                                className="form-control"
                                type="text"
                                label="Username"
                                placeholder="Enter Email Address"
                                value={this.state.skills}
                                onChange={(event) => {      //setState is to change the state on some input
                                    this.setState({
                                        skills: event.target.value
                                    });
                                }}
                                
                            />
                            <br/>
                            About me:<textarea
                                className="form-control"
                                type="text"
                                rows="4"
                                cols="40"
                                label="Username"
                                placeholder="Enter Email Address"
                                value={this.state.about_me}
                                onChange={(event) => {      //setState is to change the state on some input
                                    this.setState({
                                        about_me: event.target.value
                                    });
                                }}
                                
                            />
                            <br/>
                             Contact Number:<input
                                className="form-control"
                                type="text"
                                label="Username"
                                placeholder="Enter Email Address"
                                value={this.state.phone}
                                onChange={(event) => {      //setState is to change the state on some input
                                    this.setState({
                                        phone: event.target.value
                                    });
                                }}
                                
                            />
                            <br/>
                            <br/>
                            <button
                                className="btn btn-primary"
                                type="button"
                                onClick={() => this.props.handleSubmit3(this.state)}  //since this is child to NewerHomePage
                                                                                     //it cannot change state directly so using
                                                                                     //props to pass it to main class(NeweHomePage)
                                                                                     //onclick will pass the current state to main class
                                
                                >  
                                Save
                            </button>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <Link to="/welcome"><button className="btn btn-primary"
                                type="button">Skip</button> </Link>

                        </form>
                        </div>
                        </div>
                        <br/>
                        
                    </div>

            </div>
            
        );
    }
}

export default Profile;