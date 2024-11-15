
import { useContext } from "react"
import { Link, Outlet, useLocation } from "react-router-dom"
import { authContext } from "../Storage/store"




const Private=()=>{

    const path=useLocation()
    const Activepath=path.pathname

    const {state}=useContext(authContext)


    console.log(Activepath)
    return(
        <div className="d-flex flex-row border border-4 border-dark bg-warning">


            <section id="sidebar" className="bg-danger" style={{height:'700px',width:'12rem'}}>
                <ul>
                    <Link  style={{listStyle:'none',textDecoration:'none' ,color:Activepath==="/user"? "white":"black", fontWeight:Activepath==="/user"? "bold": "normal"}}  to={'/user'}><li>Home</li></Link>
                   <Link  style={{listStyle:'none',textDecoration:'none' ,color:Activepath==="/user/dashboard"? "white":"black", fontWeight:Activepath==="/user/dashboard"? "bold": "normal" }} to={'/user/dashboard'}> <li>Dashbord</li></Link>
                </ul>
            </section>
            <section>

            {state ? <Outlet /> : <h1>please Login</h1>}
            </section>
       
        
        </div>
    )
}
export default Private