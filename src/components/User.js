import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class User extends Component {
    render() {
        const { name, imgsrc } = this.props.user;
        return (
            <Link to="/">
                <div className="card" style={{ width: '18rem' }}>
                    <img src={ imgsrc } className="card-img-top" alt= { name } />
                        <div className="card-body">
                            <h5 className="card-title">{ name }</h5>
                        </div>
                </div>
            </Link>
        );
    }
}

User.propTypes = {
    user: PropTypes.object.isRequired
};

export default User;