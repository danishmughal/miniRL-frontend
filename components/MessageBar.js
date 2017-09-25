import React from 'react';
import { Alert } from 'reactstrap';

class MessageBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: props.visible,
    };

    this.onDismiss = this.onDismiss.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      this.setState({ visible: nextProps.visible });
    }
  }

  onDismiss() {
    this.setState({ visible: false });
  }

  render() {
    return (
      <Alert
        className="messageBar"
        color={this.props.color ? this.props.color : 'info'}
        isOpen={this.state.visible}
        toggle={this.onDismiss}
      >
        {this.props.message}
      </Alert>
    );
  }
}

export default MessageBar;
