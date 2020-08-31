import React, { Component } from 'react';
import Invoices from "./Invoices";
import PropTypes from 'prop-types';

class Accounting extends Component {
    render() {
        const { invoices, setInvoiceStatus } = this.props;
        console.log("invoices");
        console.log(invoices);
        if (invoices.length > 0) {
            return (
                <Invoices setInvoiceStatus={ setInvoiceStatus } invoices={ invoices } />
                );
        } else {
            return null;
        }
    }
}

Accounting.propTypes = {
    invoices: PropTypes.array.isRequired,
    setInvoiceStatus: PropTypes.func.isRequired
};

export default Accounting;
