import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Layout extends Component {

    static propTypes = {
        message: PropTypes.string.isRequired
    };

    render() {
        return (
            <div>
            <ul className="ul">
  <li><a className="li" href="http://localhost:3000/login">Login</a></li>
  <li><a className="li"href="#news">Contact</a></li>
  <li><a className="li"href="#contact">Newss</a></li>
  <li><a className="li"href="#about">Home</a></li>
</ul>

            </div>
        );
    }
}

export default Layout;