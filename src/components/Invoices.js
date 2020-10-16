import React, { Component } from 'react';
import Invoice from "./Invoice";
import PropTypes from 'prop-types';

class Invoices extends Component {
    render() {
        const { invoices, setInvoiceStatus } = this.props;
        console.log(invoices);
        let invoicelist = invoices.filter(invoice => invoice.amount != 0);
        if (invoicelist.length > 0) {
            return invoicelist.map((invoice) => (
                <Invoice setInvoiceStatus={ setInvoiceStatus } invoice={invoice} />
            ));
        } else {
            return null;
        }
    }
}

Invoices.propTypes = {
    invoices: PropTypes.array.isRequired,
    setInvoiceStatus: PropTypes.func
};

export default Invoices;
