import React , {useState} from 'react'
import Button from '../Common_components/Button'
import Input_text from '../Common_components/Input_text'
import firebase from 'firebase'
import { withRouter } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';

import './Login.scss'
function Signup(props) {
    const [user, setuser] = useState({email : '', password: ''})

    
    // Setting EMail input value 
    const handlechnageemail = newvalue => setuser({...user, email: newvalue})

    // Setting password input value
    const handlechnagepassword = newvalue => setuser({...user, password: newvalue})

    //sign up functionality and storeing user name and password to firebase
    const handlesubmit = () => {
        
        firebase.auth().createUserWithEmailAndPassword(user.email,user.password)
        .then((user) => {
            alert("Successful Register")
            props.history.push('/homepage');
        })
        .catch((error) => {
            alert("Got the Error")
        });
    }

    const handlesingup = () => {
        props.history.push("/");
    }
    
    return  (
    <div className="main">
        <div className="white_box">
            <h4>CREATE AN ACCOUNT</h4>
            <Input_text pholder="USERNAME" type="text" value={user.email} onChange={handlechnageemail}/>
            <Input_text pholder="PASSWORD" type="password" value={user.password} onChange={handlechnagepassword}/>
            <p>Have an account ? <button onClick={handlesingup}>Log In</button></p>
            <Button  name="SIGN UP" onClick={handlesubmit}/>
        </div>
    </div>
    )
}
export default Signup;