import { CURRENT, FAIL, LOGIN, LOGOUT, REGISTER } from "../ActionTypes/AuthTypes"

const initialState = {
    user : {},
    error : []
}

const AuthReducer=(state = initialState, action)=>{
    switch (action.type) {

        case REGISTER : 
        localStorage.setItem('token',action.payload.token)
        return {...state,user : action.payload.newUser, error : null}

        case LOGIN : 
        localStorage.setItem('token',action.payload.token)
        return {...state,user : action.payload.found, error : null}

        case CURRENT : return {...state, user : action.payload, error : null}
        
        case LOGOUT :
        localStorage.removeItem('token')
        return {...state, user : null, error : null}
        
        case FAIL : return {...state, error : action.payload, user : null}
        default: return state
    }
}

export default AuthReducer