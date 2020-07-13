import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class User extends Component {
    render() {
        const { id ,name, imgsrc } = this.props.user;

        function createOrder(e) {
          console.log(e);
          e.preventDefault();
          this.props.createOrder({
            productid: this.props.selectedProductIdForOrdering,
            userid: id
          })
        }

        return (
            <Link
              className="col-md-3"
              to="/"
              onClick={createOrder}>
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
    selectedProductIdForOrdering: PropTypes.number.isRequired
};

export default User;
