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
      <div style={styles.layoutStyle}>
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
          <link href="https://fonts.googleapis.com/css?family=Open+Sans|Raleway" rel="stylesheet" />
          <link rel="stylesheet" href="/static/css/styles.css" />

          {/* Global CSS Styles for full-page layout */}
        </Head>

        <MessageBar
          message={this.state.message}
          visible={this.state.messageBarVisible}
          color={this.state.messageBarColor}
        />
        <Navbar />

        <div style={styles.appContainerStyle}>
          <div className="container inputContainer d-flex justify-content-center">
            <InputBox updateMessageBar={this.updateMessageBar} />
          </div>

          <div className="container d-flex justify-content-center">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  appContainerStyle: {
    height: '100%',
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'column',
  },
  layoutStyle: {
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
};

export default App;
