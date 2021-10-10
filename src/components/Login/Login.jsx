import React, {useState} from 'react'
import Button from '../Common_components/Button'
import Input_text from '../Common_components/Input_text'
import './Login.scss'
import {auth, provider} from '../../firebase/firebase'
import firebase from 'firebase'
// import { useHistory } from 'react-router-dom';

function Login(props) {
    const [user, setuser] = useState({email : '', password: ''})
    const [error, seterror] = useState('');


    // Setting EMail input value 
    const handlechnageemail = newvalue => setuser({...user, email: newvalue})

    // Setting password input value
    const handlechnagepassword = newvalue => setuser({...user, password: newvalue})

    

    //sign up functionality and storeing user name and password to firebase
    const handlesubmit = () => {
        firebase.auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then((user) => {
          props.history.push('/homepage');
        //   alert("Sucess")
        })
        .catch((error) => {
            var a = error.message
            seterror(a)
        });
    }
    const handlesingup = () => {
        props.history.push("/signup");
    } 

     
    return  (
    <div className="main">
        <div className="white_box">
            <h4>LOG IN</h4>
            <span>{error}</span>
            <Input_text pholder="USERNAME" type="text" value={user.email} onChange={handlechnageemail}/>
            <Input_text pholder="PASSWORD" type="password"  value={user.password} onChange={handlechnagepassword}/>
            <p>Create an account <button onClick={handlesingup}>Sign up</button></p>
            <Button  name="Let's Login"  onClick={handlesubmit}/>
        </div>
    </div>
    )
}
export default Login;