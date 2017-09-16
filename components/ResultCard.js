import { Component } from 'react';
import { Button } from 'reactstrap';
import { TweenMax } from 'gsap';
import CopyToClipboard from 'react-copy-to-clipboard';

class ResultCard extends Component {
  componentWillEnter(callback) {
    const el = this.container;
    TweenMax.fromTo(el, 0.5, { y: -50, opacity: 0 }, { y: 0, opacity: 1, onComplete: callback });
  }

  componentWillLeave(callback) {
    const el = this.container;
    TweenMax.fromTo(el, 0.5, { y: 0, opacity: 1 }, { y: 50, opacity: 0, onComplete: callback });
  }

  render() {
    return (
      <div className="card resultCard" ref={c => (this.container = c)}>
        <div className="card-block">
          <h4 className="card-title">
            {this.props.title}
          </h4>
          <h6 className="card-subtitle">
            {this.props.url}
          </h6>
          <p className="card-text">
            <a href={this.props.miniRl}>
              {this.props.miniRl}
            </a>
          </p>
        </div>
        <div className="card-block right-section">
          <div className="hits">
            {this.props.hits} Hits
          </div>
          <div className="divider" />
          <div className="copy">
            <CopyToClipboard
              text={this.props.miniRl}
              onCopy={() =>
                this.props.updateMessageBar(
                  'The URL has been copied to your clipboard.',
                  true,
                  'success',
                )}
            >
              <Button outline color="primary">
                Copy
              </Button>
            </CopyToClipboard>
          </div>
        </div>
        {styles()}
      </div>
    );
  }
}

const styles = () =>
  (<style global jsx>
    {`
      .resultCard {
        opacity: 0.9;
        display: flex;
        flex-direction: row;
      }

      .right-section {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        border-left: 1px solid #dfebff;
      }

      .right-section > .copy > button {
        cursor: hand;
        cursor: pointer;
      }

      .right-section > .divider {
        width: 100%;
        border-top: 1px solid #dfebff;
        margin-top: 25px;
        margin-bottom: 25px;
      }

      .card-subtitle {
        font-style: italic;
        color: gray;
      }

      .card-text {
        margin-top: 10px;
        font-size: 16px;
        color: #454876;
      }
    `}
  </style>);

export default ResultCard;
