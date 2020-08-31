import React, { Component } from 'react';
import Invoice from "./Invoice";
import PropTypes from 'prop-types';

class Invoices extends Component {
    render() {
        const { invoices, setInvoiceStatus } = this.props;
        if (invoices.length > 0) {
            return invoices.map((invoice) => (
                <Invoice setInvoiceStatus={ setInvoiceStatus } invoice={invoice} />
            ));
        } else {
            return null;
        }
    }
}

Invoices.propTypes = {
    invoices: PropTypes.array.isRequired,
    setInvoiceStatus: PropTypes.func.isRequired
};

export default Invoices;
