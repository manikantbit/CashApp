import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as API from '../api/API';
import {Link, withRouter} from 'react-router-dom';
import Image from "./visa-mastercard-amex.png";

class Payment extends Component {

    static propTypes = {
        paymoney: PropTypes.func.isRequired     //why is this piece of code???
    };


    state = {
        card: '',
        expiry_month: '',
        expiry_year: '',
        CVV: '',
        Name: '',
        amount: '',
        currentbalance: ''
    };

    componentWillMount() {
        this.setState({
            card: '',
            expiry_month: '',
            expiry_year: '',
            CVV: ''
        });

        API.getBalance()
            .then(bal => {
                    console.log(bal);
                    for (var i = 0; i < bal.length; i++) {
                        this.state.currentbalance = Number(this.state.currentbalance) + Number(bal[i].Amount, 10);

                    }
                    this.setState(
                        {
                            history: bal,

                        }
                    )
                    console.log(this.state.balance);


                }
            );


    }

    render() {

        return (
            <div>
                <br/>

                <br/>
                <div class="creditCardForm col-md-9">
                    <div class="heading">
                        <h1>Confirm Purchase</h1>
                        <br/>
                    </div>
                    <div className="payment">
                        <form>
                            <h3>Current Account Balance:{this.state.currentbalance}</h3>
                            <br/>
                            <br/>
                            <div className="form-group owner ">
                                <label for="owner">Send to</label>
                                <input type="text" class="form-control" id="owner"
                                       value={this.state.Name}
                                       onChange={(event) => {      //setState is to change the state on some input
                                           this.setState({
                                               Name: event.target.value
                                           });
                                       }}></input>
                            </div>


                            <div className="form-group" id="card-number-field">
                                <label for="cardNumber">Amount</label>
                                <input type="text" class="form-control" id="cardNumber"
                                       value={this.state.Amount}
                                       onChange={(event) => {      //setState is to change the state on some input
                                           this.setState({
                                               amount: event.target.value
                                           });
                                       }}></input>
                            </div>

                            <div className="form-group" id="pay-now">
                                <button type="button" className="btn btn-primary"
                                        onClick={() => this.props.paymoney(this.state)}
                                >Confirm
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Payment);