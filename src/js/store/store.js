import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducers'
import createSagaMiddleware from 'redux-saga'
import root from '../sagas/index'
// import logger from 'redux-logger'

const sagaMiddleware = createSagaMiddleware()
const middleware = applyMiddleware(sagaMiddleware)

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  middleware
)

sagaMiddleware.run(root)

export default store

window.store = store
