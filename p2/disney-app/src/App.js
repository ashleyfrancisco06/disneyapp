import React, { Component } from 'react';
import Header from "./Component/Header/Header"
import Main from "./Component/Main/Main"
import Footer from "./Component/Footer/Footer"
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
