// :: Action Constants
export const constants = {
    GET_STRING:  'GET_STRING',
    SET_LANGUAGE: 'SET_LANGUAGE'
};

// :: Actions
export const actions = {
    getString: (name) => {
        return {
            type: constants.GET_STRING,
            payload: name
        }
    },
    setLanguage: (language) =>{
        return {
            type: constants.SET_LANGUAGE,
            payload: language
        }
    }
}