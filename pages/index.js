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

          {/* Global CSS Styles for full-page layout */}
          <style global jsx>{`
            html,
            body,
            body > div:first-of-type,
            #__next,
            #__next > div:first-of-type {
              width: 100%;
              height: 100%;
            }

            html,
            body {
              background: #2b5876; /* fallback for old browsers */
              background: -webkit-linear-gradient(
                to right,
                #2b5876,
                #4e4376
              ); /* Chrome 10-25, Safari 5.1-6 */
              background: linear-gradient(
                to bottom right,
                #2b5876,
                #4e4376
              ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
            }

            .inputContainer {
              height: 80%;
              padding-top: 10%;
            }
          `}</style>
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
