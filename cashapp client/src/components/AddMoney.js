import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as API from '../api/API';
import {Link,withRouter} from 'react-router-dom';
import Image from "./visa-mastercard-amex.png";

class AddMoney extends Component {

    static propTypes = {
        addmoney: PropTypes.func.isRequired     //why is this piece of code???
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
            <div>
                <br/>
                <br/>
                <br/>
                <br/>
                <div class="creditCardForm">
    <div class="heading">
        <h1>Confirm Purchase</h1>
    </div>
    <div className="payment">
        <form>
            
           
            
            
            <div className="form-group" id="card-number-field">
                <label for="cardNumber">Amount</label>
                <input type="text" class="form-control" id="cardNumber"
                 onChange={(event) => {      //setState is to change the state on some input
                    this.setState({
                    amount: event.target.value
                    });
                }}></input>
            </div>
            
            <div className="form-group" id="credit_cards">
                <img src={Image} height="80" width="250"id="visa"></img>
                
            </div>
            <div className="form-group" id="pay-now">
                <button type="button" className="btn btn-primary"
               onClick={() => this.props.addmoney(this.state)}
                >Confirm</button>
            </div>
        </form>
    </div>
</div>
</div>
        );
    }
}

export default withRouter(AddMoney);