
import {constants} from "../Actions/language";

const LANGUAGE_TYPES = {
    en: "en",
    es: "es"
}

const STRINGS = {
    'en': {
        OK: "OK",
        CANCEL: "Cancel",
        Back: "Back",
        Store: "Store",
        ThankYou: "Thank You",
        Welcome: "You're Welcome"
    },
    'es': {
        OK: "OK",
        CANCEL: "Cancelar",
        Back: "Regresa",
        Store: "Tienda",
        ThankYou: "Gracias",
        Welcome: "De nada"
    }
}

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
            key = action.payload.language
            if (myObj.hasOwnProperty(key)) {
                lang = LANGUAGE_TYPES[key]
            } else {
                lang = state.language
            }
            return { ...state,
                language: lang
            }

        default:
            return state;
    }
};