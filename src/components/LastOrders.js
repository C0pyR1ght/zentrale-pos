import React, { Component } from 'react';
import Order from "./Order";
import PropTypes from 'prop-types';

class LastOrders extends Component {
    render() {
        const { users, products, orders} = this.props;
        console.log("LastOrders");
        console.log(orders);
        console.log(products);
        console.log(users);
        if (users.length > 0 && products.length > 0 && orders.length > 0) {
            return orders.map((order) => (
                <Order
                    key={order.pos_order_id}
                    order={order}
                    user={users.find(user => user.pos_account_id === order.pos_account_id)}
                    product={products.find(product => product.pos_products_id === order.pos_product_id)}
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
