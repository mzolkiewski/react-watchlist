import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import StarIcon from 'material-ui-icons/Star';
import cn from 'classnames';

import { loadingSel, followRequest } from '../../duck';
import styles from './Follow.css';

const Follow = ({ following, loading, onFollow }) => {
  const classNames = cn(
    styles.icon,
    {
      [styles.following]: following,
      [styles.loading]: loading,
    },
  );

  return (
    <StarIcon
      onClick={loading ? () => {} : onFollow}
      className={classNames}
    />
  );
};

Follow.propTypes = {
  showId: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  following: PropTypes.bool.isRequired,
  onFollow: PropTypes.func.isRequired,
};

const mapState = (state, { showId }) => ({
  loading: loadingSel(state, showId),
});

const mapDispatch = (dispatch, { showId }) => ({
  onFollow: () => dispatch(followRequest(showId)),
});

export default connect(mapState, mapDispatch)(Follow);