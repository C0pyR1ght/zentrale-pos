import React, { Component } from 'react';
import User from "./User";
import PropTypes from 'prop-types';

class UserListing extends Component {
    render() {
        return this.props.users.map((user) => (
            <User selectedProductIdForOrdering={this.props.selectedProductIdForOrdering} createOrder={this.props.createOrder} key={user.id} user={user} />
        ));
    }
}

UserListing.propTypes = {
    users: PropTypes.array.isRequired,
    createOrder: PropTypes.func.isRequired,
    selectedProductIdForOrdering: PropTypes.number.isRequired
};

export default UserListing;
