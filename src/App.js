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
                name: "Ice Tee",
                price: "99€",
                imgsrc: "/logo512.png"
            },
            {
                id: 1,
                name: "Bier",
                price: "99€",
                imgsrc: "/logo512.png"
            },
            {
                id: 2,
                name: "Fritz",
                price: "99€",
                imgsrc: "/logo512.png"
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
                        <div className="row">
                            <ProductListing products={this.state.products}/>
                        </div>
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
