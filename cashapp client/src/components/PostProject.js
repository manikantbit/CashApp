import React, {Component} from 'react';
import PropTypes from 'prop-types';

class PostProject extends Component {

    static propTypes = {
        handleSubmit2: PropTypes.func.isRequired     //why is this piece of code???
    };

    state = {
        email_address:'',
        proj_name: '',
        proj_desc : '',
        skills1: '',
        skills2: '',
        skills3: '',
        payment : '',
        lower_range :'',
        upper_range : '',
        status:'open'
    };

    componentWillMount(){
        this.setState({
            email_address:'',
        proj_name: '',
        proj_desc : '',
        skills1: '',
        skills2: '',
        skills3: '',
        payment : '',
        lower_range :'',
        upper_range : ''
        });
    }

    render() {
        return (
            <div className="row justify-content-md-center">
                <div className="col-md-4">
                <h1>Post Project Details</h1>
                    <form claasName="col-md-3">
                        <div className="form-group">
                            
                        </div>
                        <div className="form-group">
                        
                       
                        Choose a name for your project
                        <input
                                className="form-control"
                                type="text"
                                label="proj_name"
                                placeholder="Enter Suitable Project Name"
                                value={this.state.proj_name}
                                onChange={(event) => {      //setState is to change the state on some input
                                    this.setState({
                                        proj_name: event.target.value
                                    });
                                }}
                                
                            />
                            <br/>
                            Tell us more about your project

                           
                             <textarea
                                className="form-control"
                                type="text-area"
                                rows="5"
                                cols="40"
                                label="proj_desc"
                                placeholder="Enter Project details"
                                value={this.state.proj_desc}
                                onChange={(event) => {      //setState is to change the state on some input
                                    this.setState({
                                        proj_desc: event.target.value
                                    });
                                }}
                                
                            />
                            <br/>
                            Enter your EMAILID:
                            <input
                                className="form-control"
                                type="text"
                                label="upper_range"
                                placeholder="Enter your valid email address"
                                value={this.state.email_address}
                                onChange={(event) => {          //setState is to change the state on some input
                                    this.setState({
                                        email_address: event.target.value
                                    });
                                }}
                            />
                            <br/>
                            Skill1
                            <input
                                className="form-control"
                                type="text"
                                label="skills1"
                                placeholder="Enter Skill1 required"
                                value={this.state.skills1}
                                onChange={(event) => {          //setState is to change the state on some input
                                    this.setState({
                                        skills1: event.target.value
                                    });
                                }}
                            />
                            <br/>
                            Skill2
                            <input
                                className="form-control"
                                type="text"
                                label="skills2"
                                placeholder="Enter Skill2 required"
                                value={this.state.skills2}
                                onChange={(event) => {          //setState is to change the state on some input
                                    this.setState({
                                        skills2: event.target.value
                                    });
                                }}
                            />
                            <br/>
                            Skill3
                            <input
                                className="form-control"
                                type="text"
                                label="skills3"
                                placeholder="Enter Skill3 required"
                                value={this.state.skills3}
                                onChange={(event) => {          //setState is to change the state on some input
                                    this.setState({
                                        skills3: event.target.value
                                    });
                                }}
                            />
                            <br/>
                            Payment method
                            <input
                                className="form-control"
                                type="text"
                                label="payment"
                                placeholder="Enter desired Payment(Hourly or Fixed Price)"
                                value={this.state.payment}
                                onChange={(event) => {          //setState is to change the state on some input
                                    this.setState({
                                        payment: event.target.value
                                    });
                                }}
                            />
                            <br/>
                            Lower Limit of the range
                            <input
                                className="form-control"
                                type="number"
                                label="lower_range"
                                placeholder="Enter Lower Range(in USD) e.g 25"
                                value={this.state.lower_range}
                                onChange={(event) => {          //setState is to change the state on some input
                                    this.setState({
                                        lower_range: event.target.value
                                    });
                                }}
                            />
                            <br/>
                            Upper Limit of the range
                            <input
                                className="form-control"
                                type="number"
                                label="upper_range"
                                placeholder="Enter Upper Range(in USD) e.g 50 "
                                value={this.state.upper_range}
                                onChange={(event) => {          //setState is to change the state on some input
                                    this.setState({
                                        upper_range: event.target.value
                                    });
                                }}
                            />
                            <br/>
                        </div>
                       
                        <div className="form-group">
                            
                        </div>
                        <div className="form-group">
                            <button
                                className="btn btn-primary"
                                type="button"
                                onClick={() => this.props.handleSubmit2(this.state)}  //since this is child to NewerHomePage
                                                                                     //it cannot change state directly so using
                                                                                     //props to pass it to main class(NeweHomePage)
                                                                                     //onclick will pass the current state to main class
                                
                                >  
                                Post My Project
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default PostProject;