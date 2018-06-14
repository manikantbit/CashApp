import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as API from '../api/API';
import {Link,withRouter} from 'react-router-dom';
import Image from "./visa-mastercard-amex.png";

class Withdraw extends Component {

    static propTypes = {
        deductmoney: PropTypes.func.isRequired     //why is this piece of code???
    };
   

    state = {
        card: '',
        expiry_month:'',
        expiry_year:'',
        account_number: '',
        Name:'',
        amount:'',
        balance:''
    };

    componentWillMount(){
        this.setState({
            card: '',
        expiry_month:'',
        expiry_year:'',
        CVV: '',
        Name:localStorage.getItem('receiver'),
        amount:localStorage.getItem('bid_amt')
        });
        
            
        
            API.getBalance()
                .then(user => {
                        console.log(user);
                        this.setState({
                            balance: user.balance
                        });
    
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
            <h3>Current Account Balance:{this.state.balance}</h3>
            <br/>
            <br/>
            
            
            <div className="form-group" id="card-number-field">
                <label for="cardNumber">Amount</label>
                <input type="text" class="form-control" id="cardNumber"
                value={this.state.balance}
                 onChange={(event) => {      //setState is to change the state on some input
                    this.setState({
                    amount: event.target.value
                    });
                }}></input>
            </div>
            
            
                
           
            <div className="form-group" id="pay-now">
                <button type="button" className="btn btn-primary"
               onClick={() => this.props.deductmoney(this.state)}
                >Confirm</button>
            </div>
        </form>
    </div>
</div>
</div>
        );
    }
}

export default withRouter(Withdraw);