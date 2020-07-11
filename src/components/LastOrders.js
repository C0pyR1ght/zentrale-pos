import React, { Component } from 'react';
import Order from "./Order";
import PropTypes from 'prop-types';

class LastOrders extends Component {
    render() {
        const users = this.props.users;
        const products = this.props.products;
        return this.props.orders.map((order) => (
            <Order
                key={order.id}
                order={order}
                user={users.find(user => user.id === order.userid)}
                product={products.find(product => product.id === order.productid)}
            />
        ));
    }
}

LastOrders.propTypes = {
    users: PropTypes.array.isRequired,
    orders: PropTypes.array.isRequired,
    products: PropTypes.array.isRequired
};

export default LastOrders;