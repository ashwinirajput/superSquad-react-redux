import { combineReducers } from 'redux';

import characters from './characters_reducer'
import heroes from './heroes_reducer';

const rootReduer = combineReducers({
    characters,
    heroes
})
export default rootReduer;