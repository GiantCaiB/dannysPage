import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";


import Header from "./Header";
import Landing from "./Landing";
import Gallery from "./Gallery";
import PetPage from "./PetPage";
import Download from "./Download";
import Chat from "./Chat";

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
      }
    
    render(){
        return(
            <div className="container">
                <BrowserRouter>
                <div>
                    <Header/>
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/Gallery" component={Gallery} />
                    <Route exact path="/Chat" component={Chat} />
                    <Route exact path="/Pet" component={PetPage} />
                    <Route exact path="/Download" component={Download} />
                </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default connect(null, actions)(App);