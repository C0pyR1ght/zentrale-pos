import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import ProductListing from './components/ProductListing';
import UserListing from "./components/UserListing";


class App extends Component {

    state = {
        products: [
            {
                id: 0,
                name: "Fritz-Getränke",
                price: "1,50 €",
                imgsrc: "/img/fritz-getraenke.jpg"
            },
            {
                id: 1,
                name: "Trade-Islands Iced Tea",
                price: "2,00 €",
                imgsrc: "/img/trade-islands.jpg"
            },
            {
                id: 2,
                name: "Bier 0,33l",
                price: "1,00 €",
                imgsrc: "/img/bier-klein.jpg"
            },
            {
                id: 3,
                name: "Bier 0,5l",
                price: "2,00 €",
                imgsrc: "/img/bier-gross.jpg"
            }
        ],
        users: [
            {
                id: 0,
                name: "Lucas Böhm",
                imgsrc: "/logo512.png"
            },
            {
                id: 1,
                name: "Luca Feiser",
                imgsrc: "/logo512.png"
            }
        ]
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <Route exact path="/" render={props => (
                      <React.Fragment>
                        <h3>Produkte</h3>
                        <div className="row">
                            <ProductListing products={this.state.products}/>
                        </div>
                      </React.Fragment>

                    )} />
                    <Route path="/users" render={props => (
                        <div className="row" >
                            <UserListing users={this.state.users}/>
                        </div>
                    )} />
                </div>
            </Router>
        );
    }
}

export default App;
