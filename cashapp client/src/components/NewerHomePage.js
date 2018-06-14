import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import * as API from '../api/API';
import Login from "./Login";
import Signup from "./Signup";
import Message from "./Message";
import Welcome from "./Welcome";
import PostProject from "./PostProject";
import Layout from './Layout';
import Navbar from './Navbar';
import Profile from './Profile';
import Account from './Account';
import Payment from './Payment';
import AddMoney from './AddMoney';
import Withdraw from './Withdraw';
import Bids from './Bids';
import Jumbotron from './Jumotron';
import MiddleContent from './MiddleContent';
import Navbar_Welcome from './Navbar_Welcome';
import Footer from './Footer';
import ParticularProject from './ParticularProject';
import BrowseProjects from "./BrowseProjects";
import DetailedProjectView from "./DetailedProjectView";
import Image from './axt_profile.JPG';
import '../App.css';
import PieChart from 'react-simple-pie-chart';

class NewerHomePage extends Component {

    state = {
        isLoggedIn: false,
        message: '',
        username: '',
        email_address: '',
        proj_name: [],
        balance: [],
        incoming: '',
        outgoing: ''


    };

    componentWillMount() {
        API.getBalance()
            .then(bal => {
                    console.log(bal);
                    for (var i = 0; i < bal.length; i++) {
                        this.state.balance = Number(this.state.balance) + Number(bal[i].Amount);

                    }
                    for (var i = 0; i < bal.length; i++) {
                        //this.state.balance=Number(this.state.balance)+Number(bal[i].Amount,10);
                        if (Number(bal[i].Amount) < 0) {
                            this.state.outgoing = Number(this.state.outgoing) + Number(bal[i].Amount);

                        }
                        else {
                            this.state.incoming = Number(this.state.incoming) + Number(bal[i].Amount);

                        }


                    }
                    console.log(this.state.outgoing);
                    console.log(-this.state.outgoing);
                    console.log(this.state.incoming);
                    this.setState(
                        {
                            history: bal,

                        }
                    )
                    console.log(this.state.balance);


                }
            );

    }

    /* componentDidMount()
     {
         API.checklogin()
         .then((result)=>
         {
             if(result==="Already Logged in")
             {
                 this.props.history.push("/welcome");
             }
             else{
                 this.props.history.push("/");
             }

         })

     }*/
    ////handler used for Login
    handleSubmit = (userdata) => {
        console.log("received by handler");    //data from Login is passed here and taken in userdata parameter.
        API.doLogin(userdata)            //this statement passes userdata parameters to API which is used for connectivity to backend
            .then((result) => {              // the following statements are executed when there is return value from nodejs
                    if (result === "Login Successful") {
                        this.setState({
                            isLoggedIn: true,      // changing the state if the credentials are true
                            message: "Login Successful!!",
                            username: userdata.username,
                            email_address: userdata.email_address
                        });
                        localStorage.setItem('image', Image)
                        localStorage.setItem('username', userdata.username);
                        localStorage.setItem('email_address', userdata.email_address)
                        console.log("states changed");
                        //window.location.href="http://localhost:3001/welcome";
                        //window.location.replace="/welcome";
                        this.props.history.push("/account");

                    }
                    else if (result === "Please fill out fields") {
                        console.log("Please fill out fields");
                        this.setState({
                            isLoggedIn: false,
                            message: "Please enter correct credentials"
                        });
                        this.props.history.push("/login");
                    }
                    else if (result === "Please enter correct credentials") {
                        console.log("Please enter correct credentials");
                        this.setState({
                            isLoggedIn: false,
                            message: "Please enter correct credentials"
                        });
                        this.props.history.push("/");
                    }
                    else {
                        console.log("Login failed");
                        this.setState({
                            isLoggedIn: false,
                            message: "Please enter correct credentials"
                        });
                    }
                }
            )
    };
    //handler used for Signup
    handleSubmit1 = (userdata) => {
        console.log("request for signup");    //data from Login is passed here and taken in userdata parameter.
        API.doSignup(userdata)            //this statement passes userdata parameters to API which is used for connectivity to backend
            .then((result) => {              // the following statements are executed when there is return value from nodejs
                    if (result === "Signup Successful") {
                        console.log("state changing");
                        this.setState({
                            isLoggedIn: true,      // changing the state if the credentials are true
                            message: "Signup Successfull..!!",
                            username: userdata.username
                        });
                        console.log("yeaah its signup successfull..")
                        this.props.history.push("/login");
                    }
                    else if (result === "Signup unsuccessful") {
                        this.setState({
                            isLoggedIn: false,
                            message: "Email already exists or left blank"
                        });
                        console.log("Signup failed");
                        this.props.history.push("/signup");
                    }

                    else if (result === "Password too short") {
                        this.setState({
                            isLoggedIn: false,
                            message: "Password too short"
                        });
                    }
                    else {
                        this.setState({
                            isLoggedIn: false,
                            message: "Missing some fill outs"
                        });
                    }
                }
            )
    };
    logout = (userdata) => {
        console.log("request for signup");    //data from Login is passed here and taken in userdata parameter.
        API.logout(userdata)            //this statement passes userdata parameters to API which is used for connectivity to backend
            .then((result) => {              // the following statements are executed when there is return value from nodejs
                    if (result === "Logged out successfully") {
                        console.log("state changing");
                        this.setState({
                            isLoggedIn: false,      // changing the state if the credentials are true
                            message: "Logged out",

                        });
                        console.log("Logged out")
                        this.props.history.push("/login");
                    }
                }
            )
    };
    //handler used for PostProject
    handleSubmit2 = (userdata) => {
        console.log("received by handler");    //data from Login is passed here and taken in userdata parameter.
        API.doPost(userdata)            //this statement passes userdata parameters to API which is used for connectivity to backend
            .then((result) => {              // the following statements are executed when there is return value from nodejs
                    if (result === "Project Posted successfully") {

                        console.log("states changed");
                        this.props.history.push("/bids");

                    }
                    else if (result === "Project Posted unsuccessfully") {
                        this.setState({
                            isLoggedIn: false,
                            message: "Please enter correct credentials"
                        });
                        this.props.history.push("/postproject");
                    }
                    else {
                        this.setState({
                            isLoggedIn: false,
                            message: "Please enter correct credentials"
                        });
                    }
                }
            )
    };


    handleSubmit3 = (userdata) => {
        console.log("received by handler");    //data from Login is passed here and taken in userdata parameter.
        API.doUpdateProfile(userdata)            //this statement passes userdata parameters to API which is used for connectivity to backend
            .then((result) => {              // the following statements are executed when there is return value from nodejs
                    if (result === "Updated successfuly") {

                        console.log("states changed");
                        this.props.history.push("/welcome");

                    }
                    else if (result === "Updation unsuccessful") {
                        this.setState({
                            isLoggedIn: false,
                            message: "Please enter correct credentials"
                        });
                        this.props.history.push("/profile");
                    }
                    else {
                        this.setState({
                            isLoggedIn: false,
                            message: "Please enter correct credentials"
                        });
                        this.props.history.push("/profile");
                    }
                }
            )
    };

    handleSubmit4 = (userdata) => {
        console.log("Request sent for Projet Name Search");
        console.log(userdata);   //data from Login is passed here and taken in userdata parameter.
        API.findProject(userdata)            //this statement passes userdata parameters to API which is used for connectivity to backend
            .then((proj) => {
                    console.log("proj received");
                    if (proj === "Error finding particular project") {
                        console.log("No matches.. try another search");
                        this.setState(
                            {
                                message: "No matches.. try another search"

                            }
                        )
                    }
                    else {
                        console.log(proj);
                        this.setState(
                            {
                                proj_name: proj,
                                message: ''
                            }
                        )
                        console.log(this.state.proj_name);
                        this.props.history.push("/particularproject");
                    }
                }
            )
    };
    projectsubmit = (userdata) => {
        console.log("Hit project details handler")
        console.log(userdata);
        localStorage.setItem('id', userdata);
        this.props.history.push("/bids/" + userdata)
    }

    projectsubmit1 = (userdata) => {
        console.log("Hit project details handler")
        console.log(userdata);
        localStorage.setItem('id', userdata);
        this.props.history.push("/detailedprojectview/" + userdata)
    }


    handleSubmit5 = (userdata) => {
        console.log("Request sent for sending bid details");
        console.log(userdata);   //data from Login is passed here and taken in userdata parameter.
        API.postBid(userdata)            //this statement passes userdata parameters to API which is used for connectivity to backend
            .then((result) => {
                    console.log(result);
                    if (result === "Bid posted successfully") {
                        console.log("Bid posted successfully");
                        this.setState(
                            {
                                message: "Bid posted successfully"

                            }
                        )
                        this.props.history.push("/browseprojects");
                    }
                    else {
                        console.log(result);
                        this.setState(
                            {

                                message: 'Bid post failed'
                            }
                        )
                        //console.log(this.state.proj_name);

                    }
                }
            )
    };

    AssignProject = (userdata) => {
        console.log("Request sent for sending bid details");
        console.log(userdata);   //data from Login is passed here and taken in userdata parameter.
        API.AssignProject(userdata)            //this statement passes userdata parameters to API which is used for connectivity to backend
            .then((result) => {
                    console.log(result);
                    if (result) {
                        localStorage.setItem('bid_amt', result.bid_amt);
                        localStorage.setItem('receiver', result.freelancer);
                        console.log("Bid posted successfully");
                        this.setState(
                            {
                                message: "Bid posted successfully"

                            }
                        )
                        this.props.history.push("/payment");
                    }
                    else {
                        console.log(result);
                        this.setState(
                            {

                                message: 'Bid post failed'
                            }
                        )
                        //console.log(this.state.proj_name);
                        this.props.history.push("/welcome");
                    }
                }
            )
    };
    addmoney = (userdata) => {
        console.log("Request sent for sending bid details");
        console.log(userdata);   //data from Login is passed here and taken in userdata parameter.
        API.addmoney(userdata)            //this statement passes userdata parameters to API which is used for connectivity to backend
            .then((result) => {
                    console.log(result);
                    if (result === "Payment posted sucessfully") {
                        console.log("Payment posted sucessfully");
                        this.setState(
                            {
                                message: "Payment posted sucessfully"

                            }
                        )
                        this.props.history.push("/account");
                    }
                    else {
                        console.log(result);
                        this.setState(
                            {

                                message: 'Bid post failed'
                            }
                        )
                        //console.log(this.state.proj_name);
                        this.props.history.push("/addcard");
                    }
                }
            )
    };

    paymoney = (userdata) => {
        console.log("Request sent for sending bid details");
        console.log(userdata);   //data from Login is passed here and taken in userdata parameter.
        API.paymoney(userdata)            //this statement passes userdata parameters to API which is used for connectivity to backend
            .then((result) => {
                    console.log(result);
                    if (result === "Payment posted sucessfully") {


                        console.log("Payment posted sucessfully");
                        this.setState(
                            {
                                message: "Payment posted sucessfully"

                            }
                        )
                        this.props.history.push("/account");
                    }
                    else if (result === "Payment Failed due to low balance") {
                        console.log(result);
                        this.setState(
                            {

                                message: 'Add Money to Pay to Freelancer'
                            }
                        )
                        //console.log(this.state.proj_name);
                        this.props.history.push("/addcard");
                    }
                }
            )
    };

    deductmoney = (userdata) => {
        console.log("Request sent for withdrawal of money");
        console.log(userdata);   //data from Login is passed here and taken in userdata parameter.
        API.deductmoney(userdata)            //this statement passes userdata parameters to API which is used for connectivity to backend
            .then((result) => {
                    console.log(result);
                    if (result === "Payment Deducted successfully") {
                        console.log("Payment posted sucessfully");
                        this.setState(
                            {
                                message: "Payment posted to your account sucessfully"

                            }
                        )
                        this.props.history.push("/account");
                    }
                    else {
                        console.log(result);
                        this.setState(
                            {

                                message: 'Payment Failed due to low balance'
                            }
                        )
                        //console.log(this.state.proj_name);
                        this.props.history.push("/withdraw");
                    }
                }
            )
    };

    render() {
        return (
            <div className="container-fluid">
                <Route exact path="/" render={() => (
                    <div>
                        <Navbar/>
                        <Jumbotron/>
                        <Footer/>


                    </div>
                )}/>

                <Route exact path="/login" render={() => (
                    <div>
                        <Login handleSubmit={this.handleSubmit}/>


                    </div>
                )}/>


                <Route exact path="/signup" render={() => (
                    <div>
                        <Message message={this.state.message}/>
                        <Signup handleSubmit1={this.handleSubmit1}/>

                    </div>
                )}/>
                <Route exact path="/welcome" render={() => (
                    <div>
                        <Navbar_Welcome email_address={this.state.email_address}
                                        logout={this.logout}/>
                        <Welcome username={this.state.username}
                                 email_address={this.state.email_address}
                                 handleSubmit4={this.handleSubmit4}
                                 projectsubmit1={this.projectsubmit1}
                        />

                    </div>
                )}/>

                <Route exact path="/postproject" render={() => (
                    <div>
                        <PostProject handleSubmit2={this.handleSubmit2}/>
                    </div>
                )}/>
                <Route exact path="/profile" render={() => (
                    <div>
                        <Profile handleSubmit3={this.handleSubmit3}/>

                    </div>
                )}/>

                <Route exact path="/account" render={() => (
                    <div>
                        <Navbar_Welcome email_address={this.state.email_address}
                                        logout={this.logout}/>
                        <Message message={this.state.message}/>
                        <Account/>


                    </div>
                )}/>

                <Route exact path="/addcard" render={() => (
                    <div>
                        <Navbar_Welcome email_address={this.state.email_address}
                                        logout={this.logout}/>
                        <Message message={this.state.message}/>
                        <AddMoney addmoney={this.addmoney}/>

                    </div>
                )}/>
                <Route exact path="/payment" render={() => (
                    <div>

                        <Payment paymoney={this.paymoney}/>

                    </div>
                )}/>

                <Route exact path="/withdraw" render={() => (
                    <div>
                        <Message message={this.state.message}/>
                        <Withdraw deductmoney={this.deductmoney}/>

                    </div>
                )}/>
                <Route exact path="/logout" render={() => (
                    alert("Are you sure")
                )}/>
                <Route exact path="/browseprojects" render={() => (
                    <div>
                        <Navbar_Welcome email_address={this.state.email_address}
                                        logout={this.logout}/>
                        <BrowseProjects handleSubmit4={this.handleSubmit4}
                                        projectsubmit={this.projectsubmit}/>

                    </div>
                )}/>
                <Route exact path="/bids/:project_id" render={() => (
                    <div>
                        <Navbar_Welcome email_address={this.state.email_address}
                                        logout={this.logout}/>
                        <br/>
                        <br/>

                        <Bids handleSubmit5={this.handleSubmit5}/>

                    </div>
                )}/>

                <Route exact path="/detailedprojectview/:project_id" render={() => (
                    <div>
                        <Navbar_Welcome email_address={this.state.email_address}
                                        logout={this.logout}/>
                        <br/>
                        <br/>

                        <DetailedProjectView AssignProject={this.AssignProject}/>

                    </div>
                )}/>
                <Route exact path="/particularproject" render={() => (
                    <div>
                        <Navbar_Welcome email_address={this.state.email_address}
                                        logout={this.logout}/>

                        <ParticularProject proj_name={this.state.proj_name}
                                           handleSubmit4={this.handleSubmit4}/>
                        <Message message={this.state.message}/>

                    </div>
                )}/>
            </div>

        );
    }
}

export default withRouter(NewerHomePage);