import React,{useState} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import  Alert  from 'react-bootstrap/Alert'
import { Link } from 'react-router-dom'
import User from './User'
import './user.css'
const UserList = ({users,deleteUser,usercount}) => {
    const [count, setcount] = useState(usercount)
    users = users.filter(u=>(u.fist_name !== ''));
    return (
        <>
        <Alert variant='primary' className={(usercount===0)?'cus-show':'cus-hide'}onClose={()=>{setcount(1)}} dismissible>Currently There are No users{' '}<Alert.Link><Link style={{color:'inherit'}}to='/adduser'>Click to Add New User</Link></Alert.Link></Alert>
        <Container>
        <div id="page-content-wrapper">
            <div className="container-fluid">
               <Row xs={3}>
                     {
                    users.map(u=>(
                        <Col key={u.email}>
                        <User key={u.email} email={u.email} firstname={u.fist_name} lastname={u.last_name} handleclick={deleteUser}/>
                        </Col>    
                    ))
                }
                </Row>
            </div>
        </div>
    </Container>
    </>
    )
}

export default UserList