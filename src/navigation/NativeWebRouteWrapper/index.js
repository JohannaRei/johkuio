import { Route } from 'react-router-dom';
import { ModalRoute } from 'react-router-modal';
import React from 'react';
import PropTypes from 'prop-types';
import 'react-router-modal/css/react-router-modal.css';

function Wrapper({ element, history, match, routeMap, closeModal }) {
  const navigate = (to, params) => {
    let url = routeMap[to].path;
    if (params && Object.keys(params).length > 0) {
      Object.keys(params).forEach(param => {
        const re = RegExp(`\:${param}\\??`); // eslint-disable-line no-useless-escape
        url = url.replace(re, escape(params[param]));
      });
    }
    url = url.replace(/\/:(.*?)(?=\/|$)/g, '');
    if (!routeMap[to].modal) {
      history.push(url);
    } else {
      const slash = /\/$/.test(match.url) ? '' : '/';
      url = match.url + slash + url;
      url = url.replace(/\*\/?/g, '');
      history.push(url);
    }
  };

  const getParam = (param, alternative) => {
    return match.params[param] || alternative;
  };

  const goBack = () => {
    history.goBack();
  };

  return React.cloneElement(element, {
    navigation: { navigate, getParam, goBack },
    closeModal
  });
}

Wrapper.propTypes = {
  element: PropTypes.element,
  history: PropTypes.object,
  routeMap: PropTypes.object,
  closeModal: PropTypes.func,
  match: PropTypes.object
};

const WebRoutesGenerator = ({ routeMap }) => {
  return Object.keys(routeMap).map(route => {
    const currentRoute = routeMap[route];
    const Component = currentRoute.component;
    if (currentRoute.modal) {
      return (
        <ModalRoute
          key={currentRoute.path}
          path={currentRoute.path}
          component={props => (
            <Wrapper element={<Component />} {...props} routeMap={routeMap} />
          )}
        />
      );
    } else {
      return (
        <Route
          key={currentRoute.path}
          path={currentRoute.path}
          exact={currentRoute.exact}
          render={props => (
            <Wrapper element={<Component />} {...props} routeMap={routeMap} />
          )}
        />
      );
    }
  });
};

WebRoutesGenerator.propTypes = {
  routeMap: PropTypes.object
};

export default WebRoutesGenerator;
