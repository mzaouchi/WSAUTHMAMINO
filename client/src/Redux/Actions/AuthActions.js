import { CURRENT, FAIL, LOGIN, LOGOUT, REGISTER } from "../ActionTypes/AuthTypes"
import axios from 'axios'
import { handleError } from "./ErrorActions"
export const register=(newUser,navigate)=>async(dispatch)=>{
    try {
        const res = await axios.post('/api/auth/SignUp',newUser)

        dispatch(
            {
                type : REGISTER,
                payload : res.data
            }
        )

        navigate('/profil')
    } catch (error) {
        // dispatch(
        //     {
        //         type : FAIL,
        //         payload : error.response.data.errors
        //     }
        // )
        error.response.data.errors.forEach(el => dispatch(handleError(el.msg)));
    }
}

export const login=(authUser,navigate)=>async(dispatch)=>{
    try {
        const res = await axios.post('/api/auth/SignIn',authUser)

        dispatch(
            {
                type : LOGIN,
                payload : res.data
            }
        )

        navigate('/profil')

    } catch (error) {
        // dispatch(
        //     {
        //         type : FAIL,
        //         payload : error.response.data.errors
        //     }
        // )
        error.response.data.errors.forEach(el => dispatch(handleError(el.msg)));
    }
}

export const current=()=>async(dispatch)=>{
    const config = {
        headers : {
            Authorized : localStorage.getItem('token')
        }
    }
    try {
        const res = await axios.get('/api/auth/currentUser',config)

        dispatch(
            {
                type : CURRENT,
                payload : res.data
            }
        )
    } catch (error) {
        dispatch(
            {
                type : FAIL,
                payload : error.response.data.errors
            }
        )
    }
}

export const logout=()=>{
    return(
        {
            type : LOGOUT
        }
    )
}