import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Product extends Component {
    render() {
        const { name, pos_products_id, price, imgsrc } = this.props.product;

        return (
            <Link className="col-md-3" to="/users" onClick={() => this.props.setSelectedProductIdForOrdering(pos_products_id)}>
                <div className="card">
                    <img src={ imgsrc } className="card-img-top" alt= { name } />
                    <div className="card-body">
                        <h5 className="card-title">{ name }</h5>
                        <p className="card-text">{ price }</p>
                    </div>
                </div>
            </Link>
        );
    }
}

Product.propTypes = {
    product: PropTypes.object.isRequired,
    setSelectedProductIdForOrdering: PropTypes.func.isRequired
};

export default Product;
