import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Product extends Component {
    render() {
        const { name, price, imgsrc } = this.props.product;
        return (
            <Link to="/users">
                <div className="card" style={{ width: '18rem' }}>
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
    product: PropTypes.object.isRequired
};

export default Product;