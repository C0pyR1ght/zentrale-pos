import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import axios from 'axios';
import { store } from 'react-notifications-component';
import Select from 'react-select'

class Invoice extends Component {

    setInvoiceStatus = status => {
        status.invoiceid = this.props.invoice_number;
        this.props.setInvoiceStatus(status);
    };

    render() {
        const options = [
            { value: 'offen', label: 'offen' },
            { value: 'bezahlt', label: 'bezahlt' }
        ];
      const { invoice_number, recipient, amount, status } = this.props.invoice;
      return (
          <>
              <li className="list-group-item">
                  <div className="row">
                      <span className="col-md-2" style={{color: "#abafb8"}}>ZENTRALE- { invoice_number }</span>
                      <span className="col-md-4"><b>{ recipient }</b></span>
                      <span className="col-md-2" style={{color: "#abafb8"}}>{ amount } €</span>
                      <span className="col-md-2" style={{color: "#abafb8"}}>{ status }</span>
                      <span className="col-md-2" style={{color: "#abafb8"}}>
                          <Select
                              options={options}
                              value={options.filter(option => option.label === status)}
                              onChange={value => this.setInvoiceStatus(value)}
                          />
                      </span>
                  </div>
              </li>
          </>
      );
    }
}

Invoice.propTypes = {
    invoice: PropTypes.object.isRequired,
    setInvoiceStatus: PropTypes.func.isRequired
};

export default Invoice;
