/**
 * Created: antosha4e
 * Date: 29.12.15
 */

import { createStore } from 'redux';
import todoApp from './reducers';

let store = createStore(todoApp);