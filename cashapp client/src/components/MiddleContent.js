import React, {Component} from 'react';
import image from"./image2.jpg";
import "../logo.svg";

import "./Layout.css"// import HomePage from "./components/HomePage";
// import NewHomePage from "./components/NewHomePage";

//import {BrowserRouter} from 'react-router-dom';
//import NewerHomePage from "./components/NewerHomePage";


// import HomePage from "./components/HomePage";

    class MiddleContent extends Component {
        render() {
            return (
               
                  <div> 
                   
                <div className="text-left"><h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;What’s great about it?</h2>
                    <br/>
                    

<ul>

<h4>
<li>
You only have to pay for work when it has been
<br/> completed and you’re 100% satisfied.
<br/>
</li>
<li>
You’ll receive free bids from our talented 
<br/>freelancers within seconds.
<br/>
</li>
<li>
We’re always here to help. Our support consists
<br/> of real people who are available 24/7.
<br/>
</li>
<li>
You can live chat with your freelancers to get <br/>
constant updates on the progress of your work.
<br/>
</li>
<li>
Keep up-to-date and on-the-go with our time <br/>tracker, and mobile app.
<br/>
</li>
<li>
Find professionals you can trust by browsing <br/>their samples of previous work and reading their profile reviews.

</li>
</h4>
</ul>
</div>


                  
                </div>
               
            );
        }
    }

    export default MiddleContent;