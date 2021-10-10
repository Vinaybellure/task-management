import React, { useContext, useState } from 'react'; 
import Button from '../Common_components/Button';
import {db} from '../../firebase/firebase'
import {UserContext} from '../Context/UserContext';


const Grid = ({id,title, description, status}) => {
    // const [state, setstate] = useState(status)

    const uid = useContext(UserContext)

    const handleClick = () => {
        // console.log(db.collection('users').doc(uid.toString()).collection('data').doc(id));
        if(status ==="pending"){
            db.collection('users').doc(uid.toString()).collection('data').doc(id).update({
                status : "progress"
            })
        }
        else if(status ==="progress") {
            db.collection('users').doc(uid.toString()).collection('data').doc(id).update({
                status : "completed"
            })
        }
        

    }

    const button = <Button onClick={handleClick} name="Chnage Status"></Button>

    return (
        <div style={{border: '1px solid black'}} className="p-2 m-2">
            <h1>{title}</h1>
            <p>{description}</p>
            <p>Status : {status}</p>
            {button}
        </div>
    )
}
export default Grid