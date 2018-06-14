import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as API from '../api/API';
import '../App.css';

class Bids extends Component {

    static propTypes = {
        
        handleSubmit5: PropTypes.func.isRequired    //why is this piece of code???
    };

    state = {
        id:'',
        proj_details:[],
        bid_amt:'',
        bid_days:''
    };
    

    componentWillMount()
{
    this.setState({
        id:localStorage.getItem('id')
    });

   
}
componentDidMount()
{
    API.getProjectDetails(this.state)
    .then(proj=>{
        console.log(proj);
        this.setState(
            {
            proj_details:proj
            }
        )
        console.log(this.state.proj_details);

        
       
    }
    );
}
    render() {
        return (
            <div className="container-fluid row-justify-content-md-center">
           
                <div className="col-md-5">
                    <table className="table table-striped table-hover">
                    <tr>
                   <b> <td>ProjectID:</td></b><td>{this.state.proj_details._id}</td>
                    
                    </tr>
                    <tr><b><td>Project Name:</td></b><td>{this.state.proj_details.proj_name}</td>
                    </tr>
                    
                    <tr><b><td>Employer:</td></b><td>{this.state.proj_details.email_address}</td>
                    </tr>
                    <tr><b><td>Project Details:</td></b><td>{this.state.proj_details.proj_details}</td>
                    </tr>
                    <tr><b><td>Skills Required for this project:</td></b><td>{this.state.proj_details.skill1},&nbsp;&nbsp;{this.state.proj_details.skill2},&nbsp;&nbsp;
                    {this.state.proj_details.skill3}
                    </td>
                    </tr>
                    <tr><b><td>Status:</td></b><td>{this.state.proj_details.status}</td>
                    </tr>
                    <tr><b><td>Bid Range:</td> </b><td>{this.state.proj_details.lower}-&nbsp;{this.state.proj_details.upper}
                    </td>
                    </tr>
                    </table>
                    <br/>
                    <br/>
                  <div>
                    <form>
                        
                    <div className="col-md-6 ">
                        <h4>Fill out Bid Details:</h4>
                        <br/>
                        
                        <div className="input-group mb-3">
                        <div className="input-group-prepend">
                        <span className="input-group-text">$</span>
    <span className="input-group-text">0.00</span>
    </div>
                       <input className="form-control col-md-6 " type="number" placeholder="Bid amount"
                        onChange={(event) => {      //setState is to change the state on some input
                            this.setState({
                            bid_amt: event.target.value
                                        });
                                                }}></input>
                                                </div>
                      
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                        <input className="form-control col-md-6" type="number" placeholder="No.of days required"
                        onChange={(event) => {      //setState is to change the state on some input
                            this.setState({
                            bid_days: event.target.value
                                        });
                                                }}></input>
                                                <br/>
                        <button type='button' className="btn btn-success"
                        onClick={()=>
                        this.props.handleSubmit5(this.state)
                        }
                        >Bid</button>  
                        </div> 
                                            </form>
                        </div>
                        </div>
                        
                    
                </div>
            
        );
    }
}

export default Bids;