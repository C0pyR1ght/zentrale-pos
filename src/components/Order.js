import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Order extends Component {
    render() {
        const { name, price, imgsrc } = this.props.product;
        return (
            <>
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-md-2">
                            <span style={{ fontWeight: "bolder" }}>{ this.props.order.orderid }</span>
                            <img src={ imgsrc } height="30px" style={{ borderRadius: "3px", marginLeft: "15px"}} alt= { name } />
                        </div>
                        <span className="col-md-4"><b>{ this.props.user.name }</b></span>
                        <span className="col-md-4" style={{color: "#abafb8"}}>{ this.props.product.name }</span>
                        <span className="col-md-2" style={{color: "#abafb8"}}>{this.props.product.price }</span>
                    </div>
                </li>
            </>
        );
    }
}

Order.propTypes = {
    order: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    product: PropTypes.object.isRequired
};

export default Order;
