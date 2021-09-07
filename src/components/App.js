import React,{useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import UserList from './UserList';
import Nav from './Nav';
import AddUser from './AddUser';
import Apis from './APIS'
import axios from 'axios'
import './App.css'

const App = () => {
    const [users, setusers] = useState([]);
    const [toggle,settoggle]=useState(false);
    const fetchUsers = async()=>{
        const res = await axios.get(Apis.fetchUsers);
        return res.data;
    }
    useEffect(()=>{
        const getUsers = async()=>{
            const allUsers = await fetchUsers();
            if(allUsers) setusers(allUsers);
          }
          getUsers();
    },[])

    const validate = (user)=>{
        let email = user.email;
        let username = user.usename;
        let len = users.filter(u=>(u.email === email||u.username === username)).length
        return len>0? 'exists' : '200';

    }
    const addUserToServer = async(user)=>{
        console.log(users);
       const status = validate(user);
        if(status === '200')
        {
            let payload = {
                email:user.email,
                fist_name:user.firstname,
                last_name:user.lastname,
                pwd:user.password,
                username:user.username
            }
            console.log("adding user");
            let res = await axios.post(Apis.addUser,payload);
            setusers([...users,payload]);
            console.log(res); 
            return true;
        }
        else
        {
            console.log("already exists");
            return false;
        }  
    }
    const deleteUser = async(targetemail)=>{

       console.log("deleted successfully");
        const updatedList = users.filter(user=>{
          return user.email !== targetemail;
        })
        console.log(updatedList);
        setusers(updatedList);
        const queryParams = {
            email:targetemail
        }
        const res = await axios.delete(Apis.deleteUser+`?email=${targetemail}`,queryParams);
        console.log(res);
    }
    const closeSidebar = ()=>{
        settoggle(!toggle);
        console.log(toggle);
    }
    return (
        <div id="wrapper" className={(toggle ? 'toggled':'')}>
    <Router>
        <Nav toggleClass = {closeSidebar}/>
        <Switch>
        <Route path='/adduser' render = {(props)=>(<AddUser {...props} handleClick={addUserToServer}/>)}/>
        <Route path='/' exact render={(props)=>(<UserList users = {users} deleteUser={deleteUser} usercount = {users.length}/>)}/>
        </Switch>
    </Router>
        </div>
    )
}

export default App
