//import db from "../../db.json"
export function getChars(){
    return function (dispatch){
        return fetch("https://hp-api.herokuapp.com/api/characters")
                .then(res => res.json())
                .then(data => dispatch({type: "GET_CHARS", payload: data.slice(0, 30)}))
    }
}