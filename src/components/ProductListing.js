import React, { Component } from 'react';
import Product from "./Product";
import PropTypes from 'prop-types';

class ProductListing extends Component {
    render() {
        return this.props.products.map((product) => (
            <Product setSelectedProductIdForOrdering={this.props.setSelectedProductIdForOrdering} key={product.id} product={product} />
        ));
    }
}

ProductListing.propTypes = {
    products: PropTypes.array.isRequired,
    setSelectedProductIdForOrdering: PropTypes.func.isRequired
};

export default ProductListing;
