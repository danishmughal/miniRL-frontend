import { Component } from 'react';
import { Button } from 'reactstrap';
import { TransitionGroup } from 'react-transition-group';
import axios from 'axios';

import SearchBox from './SearchBox';
import ResultCard from './ResultCard';

const API_URL = 'https://minirl.herokuapp.com';

class InputBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      miniRl: '',
      url: '',
      urlTitle: '',
      hits: 0,
    };
  }

  validateUrl = (url) => {
    const expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    const regex = new RegExp(expression);
    return url.match(regex);
  };

  // Adds http:// to a url if necessary
  cleanUrl = url => (url.indexOf('://') === -1 ? `https://${url}` : url);

  // Grabs the title of the page from a given url
  grabTitle = url =>
    axios
      .get(url)
      .then(response => response.data.match(/<title[^>]*>([^<]+)<\/title>/)[1])
      .catch((error) => {
        console.log(error);
      });

  // Grabs minified URL and hits from the backend
  grabMiniRl = (url) => {
    let miniRl = '';
    let hits = 0;
    return axios
      .post(`${API_URL}/link`, {
        url,
      })
      .then((response) => {
        miniRl = `${API_URL}/${response.data.hash}`;
        hits = response.data.hits;
        return { miniRl, hits };
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Asynchronously
  loadData = async (url) => {
    const urlInfo = await this.grabMiniRl(url);
    const urlTitle = await this.grabTitle(url);

    return {
      miniRl: urlInfo.miniRl,
      hits: urlInfo.hits,
      urlTitle,
    };
  };

  submitUrl = (url) => {
    this.setState({
      loading: true,
      miniRl: '',
      url: '',
      urlTitle: '',
    });

    // Perform validation before proceeding
    if (!this.validateUrl(url)) {
      this.props.updateMessageBar('Please enter a valid URL.', true);
      this.setState({ loading: false, miniRl: '', url: '', urlTitle: '' });
      return;
    }
    this.props.updateMessageBar('', false);

    url = this.cleanUrl(url);

    // Handle API request here
    this.loadData(url).then((response) => {
      console.log(response);
      this.setState({
        loading: false,
        title: response.urlTitle,
        miniRl: response.miniRl,
        hits: response.hits,
        url,
      });
    });
  };

  renderResult = () => {
    if (this.state.miniRl) {
      return (
        <ResultCard
          key={this.state.url}
          url={this.state.url}
          miniRl={this.state.miniRl}
          title={this.state.title}
          hits={this.state.hits}
          updateMessageBar={this.props.updateMessageBar}
        />
      );
    }
    return null;
  };

  render() {
    return (
      <div className="inputBox">
        <div className="inputTop">
          <div className="logo">miniRL</div>
          <SearchBox onSubmit={this.submitUrl} loading={this.state.loading} />
        </div>

        <div className="resultsContainer">
          <TransitionGroup>
            {this.renderResult()}
          </TransitionGroup>
        </div>

        {styles()}
      </div>
    );
  }
}

const styles = () =>
  (<style global jsx>
    {`
      .inputBox {
        text-align: 'center';
        width: 600px;
      }
      .inputTop {
        transition: all 3s;
      }
      .logo {
        font-size: 60px;
        color: #dfebff;
      }

      .resultsContainer {
        margin-top: 20px;
      }
    `}
  </style>);

export default InputBox;
