import React from 'react';
import PropTypes from 'prop-types';
import { combineReducers } from 'redux';

import { Spin } from '../../../shared';
import { default as store, rootReducer } from '../../store';
import { epic$ } from '../../duck';

class ModuleLoader extends React.Component {
  state = {
    loading: true,
    asyncModule: {},
  }

  componentDidMount() {
    this.loadAsyncModule(this.props.importFn);
  }

  componentWillReceiveProps = ({ importFn }) => {
    if (importFn !== this.props.importFn) {
      this.loadAsyncModule(importFn);
    }
  };

  loadAsyncModule = async (importFn) => {
    this.setState({ asyncModule: {}, loading: true });
    const asyncModule = await importFn();
    installModule(asyncModule);
    this.setState({ asyncModule, loading: false });
  }

  render() {
    const { rootComponentName } = this.props;
    const { loading, asyncModule } = this.state;

    if (loading) {
      return <Spin delay={500} size="large" />;
    }
    const Component = asyncModule[rootComponentName];
    return <Component />;
  }
}

const installModule = ({ moduleName, reducers, epics }) => {
  if (!store.installedAsyncModules[moduleName]) {
    store.installedAsyncModules[moduleName] = true;
    if (reducers) {
      store.asyncReducers[moduleName] = reducers;
      installReducers(moduleName, reducers);
    }
    if (epics) {
      installEpics(moduleName, epics);
    }
  }
};

const installReducers = (moduleName, reducers) => {
  store.replaceReducer(combineReducers({
    ...rootReducer,
    ...store.asyncReducers,
    [moduleName]: reducers,
  }));
};

const installEpics = (moduleName, epics) => {
  epic$.next(epics);
};

ModuleLoader.propTypes = {
  importFn: PropTypes.func.isRequired,
  rootComponentName: PropTypes.string.isRequired,
};

export default ModuleLoader;
