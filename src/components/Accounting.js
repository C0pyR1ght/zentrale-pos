import React, { Component } from 'react';
import Invoices from "./Invoices";
import PropTypes from 'prop-types';
import {store} from "react-notifications-component";



class Accounting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            isAdmin: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        if (this.state.value === "admin") {
            this.setState({isAdmin: true});
            const that = this;
            setTimeout(function(){
                that.setState({isAdmin: false});
                that.setState({value: ""});
            }, 30000) // auto logout after 30 minutes
        } else {
            store.addNotification({
                title: "Ooops... Falsches Passwort!",
                message: "Bitte gebe dein Passwort erneut ein.",
                type: "danger",
                insert: "top",
                container: "bottom-center",
                dismiss: {
                    duration: 5000,
                    onScreen: true
                }
            });
        }
    }

    render() {
        const { invoices, setInvoiceStatus } = this.props;

        if (this.state.isAdmin) {
            if (invoices.length > 0) {
                return (
                    <Invoices setInvoiceStatus={ setInvoiceStatus } invoices={ invoices } />
                );
            } else {
                return null;
            }
        } else {
            return (
              <div className={"card login-card"} style={{width: "18rem"}}>
                  <h3>Anmelden</h3>
                  <form onSubmit={this.handleSubmit}>
                      <input className={"form-control"} type="password" value={this.state.value} onChange={this.handleChange} />
                      <input type="submit" className={"btn btn-primary"} style={{marginTop: "10px"}} value="Anmelden" />
                  </form>
              </div>
            );
        }


    }
}

Accounting.propTypes = {
    invoices: PropTypes.array.isRequired,
    setInvoiceStatus: PropTypes.func.isRequired
};

export default Accounting;
