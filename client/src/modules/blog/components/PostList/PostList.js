import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { ThemeShowcase, ThemePicker } from '../../../themes/components';
import { getPosts } from '../../selectors';
import PostItem from '../PostItem';

const PostList = ({ posts }) => {
  const postNodes = posts.map(({ id, title }) => <PostItem key={id} id={id} title={title} />);

  return (
    <div>
      <ThemePicker />
      <ThemeShowcase />
      {postNodes}
    </div>
  );
};

PostList.propTypes = {
  posts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  posts: getPosts(state),
});

export default connect(mapStateToProps)(PostList);