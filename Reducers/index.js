import { combineReducers } from 'redux';

import * as lang from "./language"

export const reducers = combineReducers({
    lang: lang.reducer
});