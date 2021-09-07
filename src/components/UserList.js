import React,{useState,useEffect} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import  Alert  from 'react-bootstrap/Alert'
import { Link } from 'react-router-dom'
import User from './User'
import './user.css'
const UserList = ({users,deleteUser,usercount}) => {
    const [flip, setflip] = useState(false);
    users = users.filter(u=>(u.fist_name !== ''));
    useEffect(()=>{
        (usercount === 0) ? setflip(true):setflip(false);
    },[usercount]);
    return (
        <>
        <Alert variant='primary' className={(flip)?'cus-show':'cus-hide'} onClose={()=>{setflip(false)}} dismissible>Currently There are No users{' '}<Alert.Link><Link style={{color:'inherit'}}to='/adduser'>Click to Add New User</Link></Alert.Link></Alert>
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