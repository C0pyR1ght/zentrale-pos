import React, { Component } from 'react';
import Product from "./Product";
import PropTypes from 'prop-types';

class ProductListing extends Component {
    render() {
        return this.props.products.map((product) => (
            <Product key={product.id} product={product} />
        ));
    }
}

ProductListing.propTypes = {
    products: PropTypes.array.isRequired
};

export default ProductListing;