import React, { Component } from 'react';
import Order from "./Order";
import PropTypes from 'prop-types';

class LastOrders extends Component {
    render() {
        const { users, products, orders} = this.props;
        console.log("users:");
        console.log(users);
        console.log("products");
        console.log(products);
        console.log("orders:");
        console.log(orders);
        if (users.length > 0 && products.length > 0 && orders.length > 0) {
            return orders.map((order) => (
                <Order
                    key={order.id}
                    order={order}
                    user={users.find(user => user.id === order.userid)}
                    product={products.find(product => product.id === order.productid)}
                />
            ));
        } else {
            return null;
        }
    }
}

LastOrders.propTypes = {
    users: PropTypes.array.isRequired,
    orders: PropTypes.array.isRequired,
    products: PropTypes.array.isRequired
};

export default LastOrders;
