import './slicedToArray-19bf668e.js';
import './unsupportedIterableToArray-fbb818bf.js';
import React from 'react';
import './_commonjsHelpers-97e6d7b1.js';
import { P as PropTypes } from './index-097535f1.js';
import './defineProperty-a0480c32.js';
import './toConsumableArray-261b678d.js';
import 'styled-components';
import './getPrototypeOf-5905040a.js';
import './color.js';
import './components.js';
import './contains-component.js';
import './css.js';
import './dayjs.min-04cb64ac.js';
import './date.js';
import './miscellaneous.js';
import { warnOnce } from './environment.js';
import './font.js';
import './math-934b2e15.js';
import './characters.js';
import './format.js';
import './keycodes.js';
import './url.js';
import { isTransaction, blockExplorerUrl, shortenTransaction } from './web3.js';
import './constants.js';
import './breakpoints.js';
import './springs.js';
import './text-styles.js';
import './theme-dark.js';
import './theme-light.js';
import './Theme.js';
import './extends-db4f0c26.js';
import './objectWithoutProperties-234758e1.js';
import './index-422d37c0.js';
import './FocusVisible.js';
import './ButtonBase.js';
import BadgeBase from './BadgeBase.js';

var TransactionBadge = /*#__PURE__*/React.memo(function TransactionBadge(_ref) {
  var className = _ref.className,
      disabled = _ref.disabled,
      labelStyle = _ref.labelStyle,
      networkType = _ref.networkType,
      shorten = _ref.shorten,
      style = _ref.style,
      transaction = _ref.transaction,
      background = _ref.background,
      fontSize = _ref.fontSize;

  if (fontSize) {
    warnOnce('TransactionBadge:fontSize', 'The “fontSize” prop is deprecated. Please use “labelStyle” to style the label instead.');
  }

  if (background) {
    warnOnce('TransactionBadge:background', 'The “background” prop is deprecated. Please use “className” to style the badge instead.');
  }

  var isTx = isTransaction(transaction);
  var transactionUrl = isTx ? blockExplorerUrl('transaction', transaction, {
    networkType: networkType
  }) : '';
  var label = !isTx ? 'Invalid transaction' : shorten ? shortenTransaction(transaction) : transaction;
  return /*#__PURE__*/React.createElement(BadgeBase, {
    badgeOnly: true,
    disabled: disabled || !transactionUrl,
    href: transactionUrl,
    label: label,
    labelStyle: labelStyle,
    title: transaction
  });
});
TransactionBadge.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  labelStyle: PropTypes.string,
  networkType: PropTypes.string,
  shorten: PropTypes.bool,
  style: PropTypes.object,
  transaction: PropTypes.string.isRequired,
  // Deprecated
  background: PropTypes.string,
  fontSize: PropTypes.string
};
TransactionBadge.defaultProps = {
  networkType: 'main',
  shorten: true
};

export default TransactionBadge;
//# sourceMappingURL=TransactionBadge.js.map
