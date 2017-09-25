import { Component } from 'react';
import { Button } from 'reactstrap';
import { TweenMax } from 'gsap';
import CopyToClipboard from 'react-copy-to-clipboard';
import ChartIcon from 'react-icons/lib/fa/line-chart';

class ResultCard extends Component {
  componentWillEnter(callback) {
    const el = this.container;
    TweenMax.fromTo(el, 0.5, { y: 50, opacity: 0 }, { y: 120, opacity: 1, onComplete: callback });
  }

  componentWillLeave(callback) {
    const el = this.container;
    TweenMax.fromTo(el, 0.5, { y: 120, opacity: 1 }, { y: 250, opacity: 0, onComplete: callback });
  }

  render() {
    return (
      <div className="card resultCard" ref={c => (this.container = c)}>
        <div className="card-block">
          <div className="miniRlLink">
            <a href={`http://www.${this.props.miniRl}`}>
              {this.props.miniRl}
            </a>
          </div>
          <div className="originalLink">
            {this.props.url}
          </div>
        </div>
        <div className="card-block right-section">
          <div className="hits">
            <ChartIcon size="20" /> {this.props.hits}
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
      </div>
    );
  }
}

export default ResultCard;
