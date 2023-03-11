import { CLEARERROR, HANDLEERROR } from "../ActionTypes/ErrotTypes"

export const handleError=(msg)=>(dispatch)=>{
    const id = Math.random()

    dispatch(
        {
            type : HANDLEERROR,
            payload : {msg,id}
        }
    )

    setTimeout(() => {
        dispatch(
            {
                type : CLEARERROR,
                payload : id
            }
        )
    }, 3000);
}