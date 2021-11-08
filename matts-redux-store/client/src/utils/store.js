// Needed to create this js file to store the state of the app through redux.
import reducers from './reducers';
import { createStore } from 'redux';

export default createStore(reducers);