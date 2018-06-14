import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as API from '../api/API';
import '../App.css';

class DetailedProjectView extends Component {

    static propTypes = {
        AssignProject: PropTypes.func.isRequired 
       //why is this piece of code???
    };

    state = {
        id:'',
        proj_details:[],
        bid_amt:'',
        bid_days:'',
        result:[],
        freelancer:'',

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

    API.getBidData(this.state)
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
}
    render() {

        const projectNode=this.state.result.map((project,index)=>{
            return(
                   <tr key={index+1}>
                   <td className="text-left">{index+1}</td>
                   <td className="text-left">{project.email_address}</td>
                   <td className="text-left">{project.bid_amt}</td>
                   <td className="text-left">{project.bid_days}</td>
                   <td className="text-left"><button type="button" className="btn btn-success"
                
                onClick={() => 
                    {
                        
                    
                        console.log(project.proj_name);
                        console.log(project.email_address);
                        console.log(project.bid_days);
                         var hireData={
                             id:project.proj_id,
                            email:project.email_address,
                            bid_amt:project.bid_amt,
                            bid_days:project.bid_days

                        }
                        this.props.AssignProject(hireData);
                        console.log(hireData);

                            
                            }
                }
                >Hire</button></td>
                
                   </tr>
   
            )
             });
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
                  
                      
                    <table className="table table-sm table-inverse table-hover">
<thead>
    <tr>
        <th>Sr No.</th>
        <th>Freelancer</th>
        <th>Bid Value</th>
        <th>No.of Days</th>
        <th></th>
        
</tr>
    </thead>
    <tbody>
        {projectNode}
        </tbody>

        
    </table>
                        
                    
                </div>
                </div>
            
        );
    }
}

export default DetailedProjectView;