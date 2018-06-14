import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link,withRouter} from 'react-router-dom';

class AddMoney extends Component {

    static propTypes = {
        handleSubmit: PropTypes.func.isRequired     //why is this piece of code???
    };

    state = {
        card: '',
        expiry_month:'',
        expiry_year:'',
        CVV: '',
        Name:'',
        amount:''
    };

    componentWillMount(){
        this.setState({
            card: '',
        expiry_month:'',
        expiry_year:'',
        CVV: '',
        Name:'',
        amount:''
        });
    }

    render() {
        
        return (
            <div className=" row justify-content-md-center">
                <div className="col-md-4">
                    <form>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <div className="form-group">
                            <h1>Payment Details</h1>
                        </div>
                        <div className="form-group">
                        
                        <br/>
                        <input
                                className="form-control"
                                type="text"
                                label="Username"
                                placeholder="Enter Card Number"
                                value={this.state.card}
                                onChange={(event) => {      //setState is to change the state on some input
                                    this.setState({
                                        card: event.target.value
                                    });
                                }}
                                
                            />
                            <br/>
                            <input
                                className="form-control"
                                type="text"
                                label="Username"
                                placeholder="Enter Card Holder Name"
                                value={this.state.Name}
                                onChange={(event) => {      //setState is to change the state on some input
                                    this.setState({
                                        Name: event.target.value
                                    });
                                }}
                                
                            />
                            <br/>
                           
                            <div className="col-md-4">
                            <input
                                className="form-control col-md-6"
                                type="text"
                                label="Username"
                                placeholder="MM"
                                value={this.state.expiry_month}
                                onChange={(event) => {      //setState is to change the state on some input
                                    this.setState({
                                        expiry_month: event.target.value
                                    });
                                }}
                                
                            />
                             
                            
                            
                            <input
                                className="form-control col-md-9"
                                type="text"
                                label="Username"
                                placeholder="YYYY"
                                value={this.state.expiry_year}
                                onChange={(event) => {      //setState is to change the state on some input
                                    this.setState({
                                        expiry_year: event.target.value
                                    });
                                }}
                                
                            />

                            <input
                                className="form-control col-md-9"
                                type="text"
                                label="Username"
                                placeholder="CVV"
                                value={this.state.CVV}
                                onChange={(event) => {      //setState is to change the state on some input
                                    this.setState({
                                        CVV: event.target.value
                                    });
                                }}
                                
                            />
                            </div>
                            
                        </div>
                       
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="number"
                                label="password"
                                placeholder="Enter the amount"
                                value={this.state.amount}
                                onChange={(event) => {          //setState is to change the state on some input
                                    this.setState({
                                        amount: event.target.value
                                    });
                                }}
                            />
                        </div>
                        <div className="form-group">
                            <button
                                className="btn btn-success"
                                type="button"
                                onClick={() => this.props.handleSubmit(this.state)}  //since this is child to NewerHomePage
                                                                                     //it cannot change state directly so using
                                                                                     //props to pass it to main class(NeweHomePage)
                                                                                     //onclick will pass the current state to main class
                                
                                >  
                                Add Payment
                            </button>
                            
                            
                            
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(AddMoney);

