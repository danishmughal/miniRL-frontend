import { Component } from 'react';
import { Button } from 'reactstrap';
import ArrowIcon from 'react-icons/lib/fa/angle-right';

class SearchBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: '',
    };
  }

  updateUrl = event => this.setState({ url: event.target.value });

  submitUrl = () => {
    this.props.onSubmit(this.state.url);
  };

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.submitUrl();
    }
  };

  renderButton = () => {
    if (this.props.loading) {
      return (
        <Button color="primary">
          <div className="loader">
            <div id="largeBox" />
            <div id="smallBox" />
          </div>{' '}
        </Button>
      );
    }
    return (
      <Button color="primary" onClick={this.submitUrl}>
        <ArrowIcon size="32" />
      </Button>
    );
  };

  render() {
    return (
      <div className="d-flex urlField">
        <input
          type="text"
          className="form-control"
          placeholder="Enter a link..."
          value={this.state.url}
          onChange={this.updateUrl}
          onKeyPress={this.handleKeyPress}
        />

        {this.renderButton()}

        {styles()}
      </div>
    );
  }
}

const styles = () =>
  (<style global jsx>
    {`
      .urlField {
        min-width: 300px;
        max-width: 800px;
        display: flex;
      }

      .urlField > input {
        opacity: 0.9;
        width: 100%;
        flex: 1;
        font-size: 1.5em;
        border: 0;
        border-radius: 0;
        border-top-left-radius: 2px;
        border-bottom-left-radius: 2px;

        background-color: white;
      }

      .urlField > input:focus {
        background-color: white;
      }

      .urlField > button {
        font-size: 1em;
        background-color: #53E3AE;
        border: 0;
        border-radius: 0;
        border-top-right-radius: 2px;
        border-bottom-right-radius: 2px;
        cursor: pointer;
        width: 100px;
      }

      .urlField > button:focus {
        outline:0;
        background-color: #53E3AE;
      }

      .urlField > button:hover {
        background-color: #53E3AE;
      }

      // Loader styles =====
      .loader {
        width: 1.6em;
        height: 1.6em;
        animation: loaderAnim 0.5s infinite;
        outline: 1px solid transparent;
        margin-left: 20px;
      }
      .loader #largeBox {
        height: 1.6em;
        width: 1.6em;
        background-color: #ececec;
        outline: 1px solid transparent;
        position: fixed;
      }
      .loader #smallBox {
        height: 1.6em;
        width: 1.6em;
        background-color: #53E3AE;
        position: fixed;
        z-index: 1;
        outline: 1px solid transparent;
        animation: smallBoxAnim 0.5s alternate infinite ease-in-out;
      }

      @keyframes smallBoxAnim {
        0% {
          transform: scale(0.2);
        }
        100% {
          transform: scale(0.75);
        }
      }
      @keyframes loaderAnim {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(90deg);
        }
      }
      ===== Loader Styles
    `}
  </style>);

export default SearchBox;
