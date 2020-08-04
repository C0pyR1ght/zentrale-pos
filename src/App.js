import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { store } from 'react-notifications-component';
import './App.css';
import ProductListing from './components/ProductListing';
import UserListing from "./components/UserListing";
import LastOrders from "./components/LastOrders";
import Wrapper from "./components/Wrapper";
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    console.log("ENV: ", process.env.NODE_ENV);
    if (process.env.NODE_ENV === 'production') {
      this.apiBaseURL = 'https://api.zentrale-online.org';
    } else {
      this.apiBaseURL = 'http://localhost:8000';
    }
  }

    state = {
        products: [],
        users: [],
        orders: [],
        selectedProductIdForOrdering: null
    };

    componentDidMount() {
        axios
            .get(this.apiBaseURL + '/api/products')
            .then(res => this.setState({ products: res.data }))
        axios
            .get(this.apiBaseURL + '/api/users')
            .then(res => this.setState({ users: res.data }));
        axios
            .get(this.apiBaseURL + '/api/order/all?limit=10')
            .then(res => this.setState({ orders: res.data }));
    }

    createNewOrder = pos_account_id => {
      const order = {
          pos_product_id: this.state.selectedProductIdForOrdering,
          pos_account_id
      };

      axios
        .post(this.apiBaseURL + '/api/order/create', order)
        .then(res => {
          this.setState({ orders: [...this.state.orders, res.data] });
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

    deleteOrder = orderid => {
      axios
        .post(this.apiBaseURL + '/api/order/delete/' + orderid)
        .then(res => {
          this.setState({ orders: [...this.state.orders, res.data] });
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
          console.log(error);
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
    }

    setSelectedProductIdForOrdering = productId => {
        console.log("setSelectedProductIdForOrdering");
        console.log(this.state.selectedProductIdForOrdering);
        console.log(productId);
        this.setState({ selectedProductIdForOrdering: productId }, () => {
            console.log(this.state.selectedProductIdForOrdering);
        });
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
                    </div>
                </Wrapper>
            </Router>
        );
    }
}

export default App;
