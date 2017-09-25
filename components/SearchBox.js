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
          </div>
        </Button>
      );
    }
    return (
      <Button color="primary" onClick={this.submitUrl}>
        <ArrowIcon size="64" />
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
      </div>
    );
  }
}

export default SearchBox;
