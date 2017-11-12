import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CheckIcon from 'material-ui-icons/Check';

import { themes } from '../../constants';
import { getCurrentTheme } from '../../selectors';
import { setTheme } from '../../actions';
import styles from './ThemePicker.css';

const ThemePicker = ({ currentTheme, setTheme }) => {
  const options = Object.keys(themes)
    .map((theme) => (
        <button
          key={theme}
          className={styles.button}
          style={{ backgroundColor: themes[theme] }}
          onClick={() => setTheme(theme)}
        >{currentTheme === theme && <CheckIcon className={styles.icon} />}
        </button>
      )
    );

  return (
    <div className={styles.picker}>
      {options}
    </div>
  );
};

ThemePicker.propTypes = {
  currentTheme: PropTypes.string.isRequired,
  setTheme: PropTypes.func.isRequired,
};

const mapState = (state) => ({
  currentTheme: getCurrentTheme(state),
});

const mapDispatch = (dispatch) => ({
  setTheme: (theme) => dispatch(setTheme(theme)),
});

export default connect(mapState, mapDispatch)(ThemePicker);
