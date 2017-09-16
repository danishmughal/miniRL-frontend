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
        style={styles.messageBarStyle}
        color={this.props.color ? this.props.color : 'info'}
        isOpen={this.state.visible}
        toggle={this.onDismiss}
      >
        {this.props.message}
      </Alert>
    );
  }
}

const styles = {
  messageBarStyle: {
    position: 'absolute',
    width: '100%',
    borderRadius: '0',
    zIndex: 1,
    height: '50px',
  },
};

export default MessageBar;
