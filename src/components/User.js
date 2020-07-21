import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class User extends Component {
    render() {
        const { pos_account_id ,name, imgsrc } = this.props.user;

        return (
            <Link
              className="col-md-3"
              to="/"
              onClick={() => this.props.createOrder(pos_account_id)}>
                <div className="card">
                    <img src={ imgsrc } className="card-img-top" style={{ backgroundColor: "white" }} alt= { name } />
                        <div className="card-body">
                            <h5 className="card-title">{ name }</h5>
                        </div>
                </div>
            </Link>
        );
    }
}

User.propTypes = {
    user: PropTypes.object.isRequired,
    createOrder: PropTypes.func.isRequired,
};

export default User;
