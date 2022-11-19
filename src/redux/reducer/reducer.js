//initial state
//reducer func
//import db from '../../db.json'

let initialState = {
    characters: []
}

export default function reducer(state = initialState, action) {
switch (action.type) {
    case "GET_CHARS":
        return{
            ...state,
            characters: action.payload
        }

    default:
        return {...state};
}
}