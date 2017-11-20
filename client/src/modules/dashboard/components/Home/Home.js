import React from 'react';
import cn from 'classnames';
import { Tree } from 'antd';

import { ThemePicker } from '../../../themes/components';
import styles from './Home.css';

const { TreeNode } = Tree;

const Home = () => (
  <div className={styles.outerGrid}>
    <header className={cn(styles.header, styles.borders)}>header (this is IE-compatible grid layout)</header>
    <nav className={cn(styles.nav, styles.borders)}>nav</nav>
    <div className={cn(styles.main, styles.innerGrid, styles.borders)}>
      <aside className={cn(styles.aside, styles.box)}>aside</aside>
      <article className={cn(styles.article1, styles.box)}>article 1</article>
      <article className={cn(styles.article2, styles.box)}>article 2</article>
      <ThemePicker />
    </div>
    <Tree>
      <TreeNode title="parent 1" key="0-0">
      <TreeNode title="leaf" key="0-0-0-0" />
        <TreeNode title="leaf" key="0-0-0-1" />
        <TreeNode title="leaf" key="0-0-0-2" />
        <TreeNode title="leaf" key="0-0-1-0" />
        <TreeNode title="leaf" key="0-0-2-0" />
        <TreeNode title="leaf" key="0-0-2-1" />
      </TreeNode>
    </Tree>
  </div>
);

export default Home;
