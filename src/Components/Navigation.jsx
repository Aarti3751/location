import { useContext } from "react"
import { Button } from "react-bootstrap"
import { authContext } from "../Storage/store"
import { useNavigate } from "react-router-dom"




const Navigation = () => {
    const { state, setState } = useContext(authContext)
    const navigate=useNavigate()

    const A=()=>{
        setState(false)
        navigate('/')
    }
    return (
        <div className="bg-dark py-4 d-flex flex-row  justify-content-center align-items-center" >
            {state ? <Button variant={'outline-danger'} onClick={A} >Logout</Button> : <Button variant={'outline-light'} onClick={()=>{navigate('/')}}>Login</Button>}


        </div>
    )
}
export default Navigation