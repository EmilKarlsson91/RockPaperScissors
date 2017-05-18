//Code copied from facebook react native sdk.
//The reason is to get the grayed out version of send button to function correctly without
//any changes to its appearance.


'use strict';

import React, {
  PropTypes,
  Component
} from 'react';
import {
  requireNativeComponent,
  StyleSheet,
  View,
} from 'react-native';

class SendButtonGray extends Component {

  render() {
    return (
      <RCTFBSendButton
        {...this.props}
      />
    );
  }
}

SendButtonGray.propTypes = {
  ...View.propTypes,
  shareContent: PropTypes.object,
};

const styles = StyleSheet.create({
  defaultButtonStyle: {
    height: 30,
    width: 80,
  },
});
//
SendButtonGray.defaultProps = {
  style: styles.defaultButtonStyle,
};

const RCTFBSendButton = requireNativeComponent(
  'RCTFBSendButton',
  SendButtonGray
);

module.exports = SendButtonGray;
