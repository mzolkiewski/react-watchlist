import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import cn from 'classnames';

import styles from './IconButton.css';

const IconButton = ({ children, type, disabled, loading, className, ...rest }) => {
  const classNames = cn(
    styles.iconButton,
    className,
  );

  return (
    <Button type={type} ghost disabled={disabled} loading={loading} className={classNames} {...rest}>
      {children}
    </Button>
  );
};

IconButton.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['primary', 'danger']),
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  className: PropTypes.string,
};

IconButton.defaultProps = {
  type: 'primary',
};

export default IconButton;
