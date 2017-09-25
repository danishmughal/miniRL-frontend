import React, { Component } from 'react';
import Link from 'next/link';
import Head from 'next/head';

import Navbar from '../components/Navbar';
import MessageBar from '../components/MessageBar';
import InputBox from '../components/InputBox';
import Footer from '../components/Footer';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
      messageBarVisible: false,
      messageBarColor: '',
    };
  }

  updateMessageBar = (message, messageBarVisible, messageBarColor = 'info') => {
    this.setState({ message, messageBarVisible, messageBarColor });
  };

  render() {
    return (
      <div className="pageContainer">
        <Head>
          <title>miniRL</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"
            integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:100,200,400,700"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="/static/css/styles.css" />

          {/* Global CSS Styles for full-page layout */}
        </Head>

        <MessageBar
          message={this.state.message}
          visible={this.state.messageBarVisible}
          color={this.state.messageBarColor}
        />

        <Navbar />

        <div className="inputContainer d-flex justify-content-center">
          <InputBox updateMessageBar={this.updateMessageBar} />
        </div>

        <div className="container d-flex justify-content-center footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
