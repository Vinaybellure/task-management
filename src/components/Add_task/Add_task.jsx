import React, { useState, useEffect } from 'react'
import  { useDispatch , useSelector} from 'react-redux'
import Button from '../Common_components/Button'
import Input_text from '../Common_components/Input_text'
import Text_area from '../Common_components/Text_area'
import { db } from '../../firebase/firebase'
import firebase from 'firebase'
import '../Login/Login.scss'

function Add_task(props) {

    const [value, setvalue] = useState({input : '', text: ''})
    const [uid, setuid] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        firebase.auth().onAuthStateChanged((authenticated) => {
          setuid(authenticated.uid)
        });
      })

    const handleChnageinput = (newvalue) => {
        setvalue((value) => ({...value, input : newvalue}))
    }
    const handleChnageText = (newvalue) => {
        setvalue((value) => ({...value, text : newvalue}))
    }

    // const handleClick = (e) => {
    //     e.preventDefault();
    //     db.collection('todo').add({
    //     data: value
    //     })
    //     setvalue((value) => ({...value,  input : '', text : ''}))
    // }
    const handleClear = () => {
        setvalue((value) => ({...value,  input : '', text : ''}))
    }
    const handleClick = (e) => { 
        const userId = uid
        const data = {
            title : value.input,
            description : value.text,
            status : "pending"
        }
        db.collection('users').doc(userId).collection('data').add(data)
    }


    const input = <Input_text pholder="Title of the Task" type="text" value={value.input} onChange={handleChnageinput} ></Input_text>
    const text_area = <Text_area pholder="Details of the Task" type="text" value={value.text} onChange={handleChnageText}></Text_area>
    const button = <Button onClick={handleClick} name="SUBMIT"></Button>
    const clear = <Button onClick={handleClear} name="CLEAR"></Button>
    return (
        <div className="container w-100 h-100 d-flex justify-content-center align-items-center">
            <div>
                <h4>Add a Task</h4>
                {input}
                <br/>
                <br/>
                {text_area}
                <br/>
                <br/>
                {button}
                <br/>
                <br/>
                {clear}
            </div>
            
        </div>
    )
}
export default Add_task;