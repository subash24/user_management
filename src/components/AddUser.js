import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/esm/Container";
import Alert from 'react-bootstrap/Alert';
import { Link } from "react-router-dom";
import './user.css';
const AddUser = ({handleClick}) => {
  const [newUser, setnewUser] = useState({firstname:'',lastname:'',username:'',email:'',password:''});
    const [success,setsuccess] = useState(false);
    const [failure,setfailure] = useState(false);
   const add = (e)=>{
       e.preventDefault();
       let s = handleClick(newUser); 
       console.log(s);
       s.then(res=>{
        if(res)
        {
         setnewUser({firstname:'',lastname:'',username:'',email:'',password:''});
         setsuccess(true);
         console.log('success');
        }
        else
        {
             setfailure(true);
             console.log("failure");
        }

       })  
   }
  return (
      <div className="User-panel">
          <Alert variant="success" className={`text-center ${success?'cus-show':'cus-hide'}`} dismissible onClose={()=>{setsuccess(false)}}>User successfully Added{' '}<Alert.Link><Link to='/' style={{color:'inherit'}}>View All Users</Link></Alert.Link></Alert>
          <Alert variant="danger" className={`text-center ${failure?'cus-show':'cus-hide'}`} dismissible onClose={()=>{setfailure(false)}}>The Username or Email You entered already exists{' '}<Alert.Link><Link to='/' style={{color:'inherit'}}>View Existing Users</Link></Alert.Link></Alert>
        <Container>
            <div className = 'form-cus'>
            <h1 className="text-center mb-3 pt-2">USER FORM</h1>
            <div className="user-form">
        <Form
          className="container"
          onSubmit={add}
          style={{ maxWidth: "440px","padding":"40px 0" }}
          autoComplete='off'
        >
          <Row>
            <Col>
              <Form.FloatingLabel
                controlId="First Name"
                label="First Name"
                className="mb-3"
              >
                <Form.Control type="text" placeholder="eg:Sam,sara" value={newUser.firstname}onChange={(e)=>{setnewUser({...newUser,firstname:e.target.value})}} required/>
              </Form.FloatingLabel>
            </Col>
            <Col>
              <Form.FloatingLabel
                controlId="Last Name"
                label="Last Name"
                className="mb-3"
              >
                <Form.Control type="text" placeholder="eg:S,Smith" value={newUser.lastname}onChange={(e)=>{setnewUser({...newUser,lastname:e.target.value})}} required/>
              </Form.FloatingLabel>
            </Col>
          </Row>
          <Form.FloatingLabel
            controlId="Username"
            label="Username"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="Username" value={newUser.username} onChange={(e)=>{setnewUser({...newUser,username:e.target.value})}} required/>
          </Form.FloatingLabel>
          <Form.FloatingLabel
            controlId="Email"
            label="Email address"
            className="mb-3"
          >
            <Form.Control type="email" placeholder="name@example.com" value={newUser.email} onChange={(e)=>{setnewUser({...newUser,email:e.target.value})}} required/>
          </Form.FloatingLabel>
          <Form.FloatingLabel
            controlId="Password"
            label="Password"
            className="mb-3"
          >
            <Form.Control type="password" placeholder="Password" value={newUser.password} onChange={(e)=>{setnewUser({...newUser,password:e.target.value})}} required/>
          </Form.FloatingLabel>
          <div className="mt-3 d-flex justify-content-center">
          <button className="btn btn-primary px-3 py-2">Add User</button>
          </div>
        </Form>
      </div>
      </div>
      </Container>
      </div>
  );
};

export default AddUser;
