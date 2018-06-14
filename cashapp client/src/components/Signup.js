import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link,withRouter} from 'react-router-dom';

class Signup extends Component {

    static propTypes = {
        handleSubmit1: PropTypes.func.isRequired     //why is this piece of code???
    };

    state = {
        email_address: '',
        username : '',
        password: '',
        debitcard:''
    };

    componentWillMount(){
        this.setState({
            email_address: '', 
            username : '',              //It is mounted before render method but what is the main usage?
            password: '',
            debitcard:''
        });
    }

    render() {
        return (
            

            <div className="row justify-content-md-center">
                <div className="col-md-3">
                    <form>
                        <div className="form-group">
                        <br/><br/><br/><br/><br/>
                            <h1>Signup Page</h1>
                        </div>
                        <div className="form-group">
                        
                        <br/>
                        <input
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
                           
                             <input
                                className="form-control"
                                type="text"
                                label="Username"
                                placeholder="Enter Username"
                                value={this.state.username}
                                onChange={(event) => {      //setState is to change the state on some input
                                    this.setState({
                                        username: event.target.value
                                    });
                                }}
                                
                            />
                            
                        </div>
                       
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="password"
                                label="password"
                                placeholder="Enter Password"
                                value={this.state.password}
                                onChange={(event) => {          //setState is to change the state on some input
                                    this.setState({
                                        password: event.target.value
                                    });
                                }}
                            />
                        </div>
                        
                        <input
                                className="form-control"
                                type="text"
                                label="Username"
                                placeholder="Enter CardNumber"
                                value={this.state.debitcard}
                                onChange={(event) => {      //setState is to change the state on some input
                                    this.setState({
                                        debitcard: event.target.value
                                    });
                                }}
                                
                            />
                            <br/>
                        <div className="form-group">
                            <button
                                className="btn btn-primary"
                                type="button"
                                onClick={() => this.props.handleSubmit1(this.state)}  //since this is child to NewerHomePage
                                                                                     //it cannot change state directly so using
                                                                                     //props to pass it to main class(NeweHomePage)
                                                                                     //onclick will pass the current state to main class
                                
                                >  
                                Create Account
                            </button>
                            &nbsp; &nbsp; &nbsp;
                            
                            Already member?
                            &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
                            <Link to="/login">Login</Link>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Signup;