import { Route } from 'react-router-dom'
import { ModalRoute } from 'react-router-modal'
import React from 'react'
import './components/DetailsModal/custom_modal.css'

function Wrapper({ element, history, match, routeMap, closeModal }) {
  const navigate = (to, params) => {
    let url = routeMap[to].path
    // replace params ids in the url with actual values
    if (params && Object.keys(params).length > 0) {
      Object.keys(params).forEach(param => {
        const re = RegExp(`\:${param}\\??`) // eslint-disable-line no-useless-escape
        url = url.replace(re, escape(params[param]))
      })
    }
    // removing empty params from url - every string between /: and ?
    url = url.replace(/\/:(.*?)(?=\/|$)/g, '')
    // if the route is not a modal
    if (!routeMap[to].modal) {
      history.push(url)
      // if the route is a modal
    } else {
      // checking if the url ends with a slash or not
      const slash = /\/$/.test(match.url) ? '' : '/'
      // current url in the browser + slash + modal url with parameters
      url = match.url + slash + url
      // removing the */ from the url
      url = url.replace(/\*\/?/g, '')
      history.push(url)
    }
  }

  const getParam = (param, alternative) => {
    return match.params[param] || alternative
  }

  const goBack = () => {
    history.goBack()
  }

  return React.cloneElement(element, {
    navigation: { navigate, getParam, goBack },
    closeModal
  })
}

const WebRouteGenerator = ({ routeMap }) => {
  return Object.keys(routeMap).map(route => {
    const currentRoute = routeMap[route]
    const Component = currentRoute.component
    if (currentRoute.modal) {
      return (
        <ModalRoute
          key={currentRoute.path}
          path={`*${currentRoute.path}`}
          className="papu_modal_container"
          inClassName="papu_modal_in"
          outClassName="papu_modal_out"
          outDelay="100"
          component={props => (
            <Wrapper element={<Component />} {...props} routeMap={routeMap} />
          )}
        />
      )
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
      )
    }
  })
}

export default WebRouteGenerator
