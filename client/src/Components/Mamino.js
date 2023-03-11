import { Alert } from "react-bootstrap"
import { useSelector } from "react-redux"

const Mamino=()=>{
    const errors = useSelector(state=>state.ErrorReducer)
    return(
        <>
        {
            errors.map(el=>  <Alert variant='danger'>{el.msg}</Alert>)
        }
        </>
    )
}

export default Mamino