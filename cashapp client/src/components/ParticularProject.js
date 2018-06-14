import React, {Component} from 'react';
import {Link,withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import * as API from '../api/API';
import Navbar_Welcome from './Navbar_Welcome';
import Bids from './Bids';
import Message from './Message';
import '../App.css';

class ParticularProject extends Component {

    
    static propTypes = {
        proj_name: PropTypes.array.isRequired , 
        handleSubmit4: PropTypes.func.isRequired    //why is this piece of code???
    };
   

    
    state = {
        result:[],
        projname:[],
        proj_name:[],
        projdetails:[],
        xyz:'',
        
        
        image:this.props.image,
        username : this.props.username,
        email_address: this.props.email_address
    };

    componentWillMount(){
        
        API.getOpenProjects()
        .then(data=>{
            console.log(data);  //result received
            this.state.result=data;
            console.log(this.state.result); //assigned to an array in state
            console.log(this.state.result.length); //found the length of the 
            this.setState({
                result:data
       });
            
            //console.log(this.state.proj_name);
            //console.log(data);
            //console.log(data[0]);
            //console.log(data[1]);
    
        console.log(this.state.result);
    });
        API.getProfileImage()
        .then(result=>{
           
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

    componentDidMount(){
        document.title = `Welcome, ${this.state.username} !!`;
        document.title = `Welcome, ${this.state.email_address} !!`;
    }


    render(){
        const projectNode=this.props.proj_name.map((project,index)=>{
         return(
                <tr key={index+1}>
                <td className="text-left">{index+1}</td>
                <td className="text-left">{project.proj_name}</td>
                <td className="text-left">{project.proj_details}</td>
                <td className="text-left">{project.pay}</td>
                <td className="text-left">{project.status}</td>
                <td className="text-left"><Link to ="/bids"><button className="btn btn-success">Bid Now</button></Link></td>
                <td className="text-left">{project.lower}</td>
                <td className="text-left">{project.upper}</td>
                </tr>
                

         )
          });
        return(
            
             
            <div>
                <div className="container-fluid ">
                    <div className="right  ">
                    <div className="main">
                      <div className="left ">  
                    <img src={this.state.image} height='150' width='150'></img>
                    </div>
                    <br/>
                    <br/>
                        <h6> Welcome back,<Link to="/profile">{this.state.username}</Link>&nbsp;</h6>
            
                    
                        
                        
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to="/profile"><button className="btn btn-primary">Edit</button></Link>

                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to="/profile"><button className="btn btn-primary">View</button></Link>
                    </div>
                    </div>
                    
                    <br/>
                    <br/>
                    <br/>
                    <br/><br/>
                    <br/>
<div >
<h3 className="mr-0">Project Details</h3>
<br/>

<form >
    <div className="col-md-3">
<input className="form-control col-md-9"
type="text"
label="Username"
placeholder= "Search by Project Nameor Skillset" 
value={this.state.xyz}
onChange={(event) => {      //setState is to change the state on some input
this.setState({
xyz: event.target.value
            });
                    }}/>
                           <div className="form-group col-md-7">
                            <button
                                className="btn btn-success"
                                type="button"
                                onClick={() => this.props.handleSubmit4(this.state)}>  
                                Search
                            </button>
                            </div>
                            </div>
                    
                         
    </form>

<table className="table table-sm table-inverse table-hover">
<thead>
    <tr>
        <th>#</th>
        <th>Project Name</th>
        <th>Project Details</th>
        <th>Payment method</th>
        <th>Status</th>
        <th></th>
        <th>Upper range</th>
        <th>Lower Range</th>
</tr>
    </thead>
    <tbody>
        {projectNode}
        
        </tbody>

        
    </table>
    </div> 

<br/>
<br/>

                    <br/>
                    
                </div>
               
            </div>
            
        )
    }
}

export default withRouter(ParticularProject);