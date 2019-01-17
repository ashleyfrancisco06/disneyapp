import React, { Component } from 'react';
import Header from "./Header/Header"
import Main from "./Main/Main"
import Footer from "./Footer/Footer"
import './App.css';
import { ParallaxProvider } from "react-scroll-parallax";


class App extends Component {
  render() {
    return (
      <div className="App">

        <ParallaxProvider>
            <Header />
            <Main />
            <Footer />
        </ParallaxProvider>
        </div>
        );
      }
    }
    
    export default App;
