
import {constants} from "../Actions/language";
import {LANGUAGE_TYPES, STRINGS} from "../Constants/Utilities";


const initialState = {
    language: LANGUAGE_TYPES.en,
    language_strings: STRINGS[LANGUAGE_TYPES.en]
};

export function reducer(state = initialState, action) {
    switch (action.type) {

        case constants.GET_STRING:
            return {}

        case constants.SET_LANGUAGE:
            let lang = null
            key = action.payload
            console.log(key)
            lang = key
            language_strings = STRINGS[key]
            return { ...state,
                language: lang,
                language_strings: language_strings
            }

        default:
            return state;
    }
};