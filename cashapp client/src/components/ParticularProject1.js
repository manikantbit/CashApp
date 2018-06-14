import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ParticularProject extends Component {

    static propTypes = {
        proj_name: PropTypes.array.isRequired
    };

    render() {
        return (
            <div className="row justify-content-md-center">
                <div className="col-md-3">
                   Hi {this.props.proj_name}
                </div>
            </div>
        );
    }
}

export default ParticularProject;