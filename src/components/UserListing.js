import React, { Component } from 'react';
import User from "./User";
import PropTypes from 'prop-types';

class UserListing extends Component {
    render() {
        return this.props.users.map((user) => (
            <User key={user.id} user={user} />
        ));
    }
}

UserListing.propTypes = {
    users: PropTypes.array.isRequired
};

export default UserListing;