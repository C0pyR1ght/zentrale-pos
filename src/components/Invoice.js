import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import axios from 'axios';
import { store } from 'react-notifications-component';
import Select from 'react-select'

class Invoice extends Component {

    setInvoiceStatus = status => {
        status.invoiceid = this.props.invoice.invoice_number;
        this.props.setInvoiceStatus(status);
    };

    render() {
        const options = [
            { value: 'offen', label: 'Offen' },
            { value: 'paypal', label: 'PayPal' },
            { value: 'bar', label: 'Barzahlung' }
        ];

      const { invoice_number, recipient, amount, status, date, due_date } = this.props.invoice;

      let parsedDate = new Date(Date.parse(date));
      let displayDate = parsedDate.toLocaleDateString("de-DE");
      let parsedDueDate = new Date(Date.parse(due_date));
      let displayDueDate = parsedDueDate.toLocaleDateString("de-DE");

      let overdue = status === 'offen' && parsedDueDate - Date.parse(new Date()) < 0;
      let tobepayed = overdue === false && status === 'offen';

      return (
          <>
              <li className={`list-group-item ${overdue ? "overdue" : ""} ${tobepayed ? "tobepayed" : ""}`}>
                  <div className="row">
                      <span className="col-md-2" style={{color: "#abafb8"}}>ZENTRALE- { invoice_number }</span>
                      <span className="col-md-3"><b>{ recipient }</b></span>
                      <span className="col-md-1" style={{color: "#abafb8"}}>{ amount } €</span>
                      <span className="col-md-2" style={{color: "#abafb8"}}>{ displayDate }</span>
                      <span className="col-md-2" style={{color: "#abafb8"}}>{ displayDueDate }</span>
                      <span className="col-md-2" style={{color: "#abafb8"}}>
                          <Select
                              options={options}
                              value={options.filter(option => option.value === status)}
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
