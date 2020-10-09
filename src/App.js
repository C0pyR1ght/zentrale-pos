import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { store } from 'react-notifications-component';
import './App.css';
import ProductListing from './components/ProductListing';
import UserListing from "./components/UserListing";
import LastOrders from "./components/LastOrders";
import Wrapper from "./components/Wrapper";
import Accounting from "./components/Accounting";
import axios from 'axios';

class App extends Component {
    constructor() {
      super();
      console.log("ENV: ", process.env.NODE_ENV);
      if (process.env.NODE_ENV === 'production') {
        window.apiBaseURL = 'https://api.zentrale-online.org';
      } else {
      window.apiBaseURL = 'http://localhost:8000';
      }
    }

    max_orders_displayed = 10;

    state = {
        selectedUser: null,
        products: [],
        users: [],
        orders: [],
        invoices: [],
        selectedProductIdForOrdering: null
    };

    componentDidMount() {

        axios
            .get(window.apiBaseURL + '/api/products')
            .then(res => this.setState({ products: res.data }));
        axios
            .get(window.apiBaseURL + '/api/users')
            .then(res => this.setState({ users: res.data }));
        axios
            .get(window.apiBaseURL + '/api/invoice/all')
            .then(res => this.setState({ invoices: res.data }));

        this.getLastOrders();
    }

    getLastOrders() {
      axios
          .get(window.apiBaseURL + '/api/order/all?limit=' + this.max_orders_displayed)
          .then(res => this.setState({ orders: res.data }));
    }

    createNewOrder = pos_account_id => {
      const order = {
          pos_product_id: this.state.selectedProductIdForOrdering,
          pos_account_id
      };

      axios
        .post(window.apiBaseURL + '/api/order/create', order)
        .then(res => {
          console.log(this.max_orders_displayed);
          console.log(this.state.orders.slice(0, this.max_orders_displayed));
          if (this.state.orders.length >= this.max_orders_displayed) {
            this.setState({ orders: [res.data, ...this.state.orders.slice(0, this.max_orders_displayed - 1)] });
            console.log(this.state.orders);
          } else {
            this.setState({ orders: [res.data, ...this.state.orders] });
          }

          store.addNotification({
              title: "Bestellung erfasst!",
              message: "und mit deinem Konto verrechnet",
              type: "success",
              insert: "top",
              container: "bottom-center",
              dismiss: {
                  duration: 5000,
                  onScreen: true
              }
          });
        }).catch(error => {
          console.log(error);
          store.addNotification({
              title: "Ooops... Bitte prüfe die Internetverbindung!",
              message: error.message,
              type: "danger",
              insert: "top",
              container: "bottom-center",
              dismiss: {
                  duration: 5000,
                  onScreen: true
              }
          });
      })
    };

    deleteOrder = orderid => {
      axios
        .post(window.apiBaseURL + '/api/order/delete/' + orderid)
        .then(res => {
            this.setState({ orders: [...this.state.orders.filter(item => item.pos_order_id !== orderid)] });
            axios
                .get(window.apiBaseURL + '/api/order/all?limit=' + this.max_orders_displayed)
                .then(res => this.setState({ orders: res.data }));
            store.addNotification({
                title: "Bestellung gelöscht!",
                message: "Die ausgewählte Bestellung wurde rückgängig gemacht",
                type: "success",
                insert: "top",
                container: "bottom-center",
                dismiss: {
                    duration: 5000,
                    onScreen: true
                }
            });
        }).catch(error => {
          store.addNotification({
              title: "Ooops... Ein Fehler ist aufgetreten!",
              message: error.message,
              type: "danger",
              insert: "top",
              container: "bottom-center",
              dismiss: {
                  duration: 5000,
                  onScreen: true
              }
          });
      })
    };

    setSelectedProductIdForOrdering = productId => {
        this.setState({ selectedProductIdForOrdering: productId });
    };

    setSelectedUser = selectedUser => {
      this.setState({ selectedUser })
    };

    setInvoiceStatus = status => {
        console.log("setstatus ", status);
        const sendStatus = {
            status: status.value
        };

        axios
            .post(window.apiBaseURL + '/api/invoice/'+ status.invoiceid +'/status', sendStatus)
            .then(res => {

                var modifedInvoices = [ ...this.state.invoices ];
                modifedInvoices.find(element => {
                    console.log(element);
                });

                this.setState({ invoices: [...this.state.invoices ] })

                store.addNotification({
                    title: "Status gesetzt!",
                    message: "Rechnung wurde als " + status.value + " markiert",
                    type: "success",
                    insert: "top",
                    container: "bottom-center",
                    dismiss: {
                        duration: 5000,
                        onScreen: true
                    }
                });
            }).catch(error => {
            console.log(error);
            store.addNotification({
                title: "Ooops... Bitte prüfe die Internetverbindung!",
                message: error.message,
                type: "danger",
                insert: "top",
                container: "bottom-center",
                dismiss: {
                    duration: 5000,
                    onScreen: true
                }
            });
        })
    };

    render() {
        return (
            <Router>
                <Wrapper>
                    <div className="App">
                        <Route exact path="/" render={props => (
                          <React.Fragment>
                              <h3>Produkte</h3>
                              <div className="row productRow">
                                <ProductListing setSelectedProductIdForOrdering={this.setSelectedProductIdForOrdering} products={this.state.products}/>
                              </div>
                              <div className="row">
                                  <div className="col-md-6">
                                      <h3 style={{marginTop: "20px"}}>Letzte Bestellungen</h3>
                                      <ul className="list-group">
                                        <LastOrders orders={this.state.orders} products={this.state.products} users={this.state.users} deleteOrder={this.deleteOrder}/>
                                      </ul>
                                  </div>
                                  <div className="col-md-6">
                                      <h3 style={{marginTop: "20px"}}>Beliebteste</h3>
                                      <div className="stats">
                                          <p style={{ width: "100%", textAlign: "center", paddingTop: "50px", color: "#abafb8"}}>aktuell sind keine Daten verfügbar</p>
                                      </div>
                                  </div>
                              </div>
                          </React.Fragment>

                        )} />
                        <Route path="/users" render={props => (
                            <>
                                <h3>Verrechnungskonto auswählen</h3>
                                <div className="row" >
                                    <UserListing createOrder={this.createNewOrder} users={this.state.users}/>
                                </div>
                            </>
                        )} />
                        <Route path="/myaccountselection" render={props => (
                            <>
                                <h3>Dein Account auswählen</h3>
                                <div className="row" >
                                    <UserListing setSelectedUser={this.setSelectedUser} users={this.state.users}/>
                                </div>
                            </>
                        )} />
                      <Route path="/myaccount" render={props => (
                            <>
                                <h3>Hallo {this.state.users.find(e => e.pos_account_id === this.state.selectedUser).name}</h3>
                                <div className="row" >
                                    <div className="card" style={{ width: "18rem" }}>
                                        <div className="card-body">
                                            <h5 className="card-title">Saldo</h5>
                                            <h6 className="card-subtitle mb-2 text-muted">Dein offener Rechnungsbetrag:</h6>
                                            <p className="card-text">{this.state.users.find(e => e.pos_account_id === this.state.selectedUser).saldo} €</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )} />
                        <Route path="/accounting" render={props => (
                            <Accounting setInvoiceStatus={this.setInvoiceStatus} invoices={this.state.invoices} />
                        )} />
                    </div>
                </Wrapper>
            </Router>
        );
    }
}

export default App;
