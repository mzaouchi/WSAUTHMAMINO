import {Navbar,Nav,Container} from "react-bootstrap"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { logout } from "../Redux/Actions/AuthActions"

const NavAuth=()=>{
    const token = localStorage.getItem('token')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    return(
        <Navbar bg="danger" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Auth</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            {
              token ?
              <>
              <Nav.Link as={Link} to="/profil">Profil</Nav.Link>
              <Nav.Link onClick={()=>{dispatch(logout());navigate('/')}} >Logout</Nav.Link>
              </>
              :
              <>
              <Nav.Link as={Link} to="/register">Register</Nav.Link>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              </>
            }

            
            
          </Nav>
        </Container>
      </Navbar>
    )
}

export default NavAuth