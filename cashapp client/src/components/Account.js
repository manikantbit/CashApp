import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import * as API from '../api/API';
import PieChart from 'react-simple-pie-chart';

class Account extends Component {

    static propTypes = {};
    state = {
        history: [],
        balance: [],
        outgoing: [],
        incoming: [],
        totalbal: ''
    };

    componentWillMount() {
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
        // const projectNode = this.state.history.map((balance, index) => {
        //
        //     return (
        //         <tr key={index + 1}>
        //             <td className="text-left">{index + 1}</td>
        //             <td className="text-left">{balance._id}</td>
        //             <td className="text-left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{balance.Amount}</td>
        //             <td className="text-left">{balance.email_address}</td>
        //
        //
        //         </tr>
        //
        //
        //     )
        // });


        var totalbal = function () {
            for (var i = 0; i <= this.state.balance.length; i++) {
                this.state.totalbal = this.state.balance[i];

            }
            return (this.state.totalbal);
        };


        return (
            <div className="row justify-content-md-center">
                <div className="col-md-7">
                    {totalbal}
                    <form>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <div className="form-group">
                            <h1>Account Details Summary</h1>

                            <h4>Account Balance:{this.state.balance}</h4>
                        </div>
                        <div className="form-group">

                            <br/>
                            <Link to="/addcard">
                                <button
                                    className="btn btn-primary"
                                    type="button"
                                    //since this is child to NewerHomePage
                                    //it cannot change state directly so using
                                    //props to pass it to main class(NeweHomePage)
                                    //onclick will pass the current state to main class

                                >
                                    Add Money
                                </button>
                            </Link>
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            <Link to="/withdraw">
                                <button
                                    className="btn btn-primary"
                                    type="button"
                                    //since this is child to NewerHomePage
                                    //it cannot change state directly so using
                                    //props to pass it to main class(NeweHomePage)
                                    //onclick will pass the current state to main class

                                >
                                    Withdraw Money
                                </button>
                            </Link>

                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            <Link to="/payment">
                                <button
                                    className="btn btn-primary"
                                    type="button"
                                    //since this is child to NewerHomePage
                                    //it cannot change state directly so using
                                    //props to pass it to main class(NeweHomePage)
                                    //onclick will pass the current state to main class

                                >
                                    Send Money
                                </button>
                            </Link>
                        </div>

                    </form>
                </div>

            </div>
        );
    }
}

export default withRouter(Account);