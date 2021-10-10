import React, { useContext } from 'react'; 
import { useState } from 'react';
import { useEffect } from 'react';
import {UserContext} from '../Context/UserContext';
import {db} from '../../firebase/firebase'
import Grid from './Grid'
const View = () => { 
    const uid = useContext(UserContext)
    const [data, setdata] = useState([])
    
    useEffect(() => {
        if(uid){
            console.log(uid)
            db.collection('users').doc(uid.toString()).collection('data').onSnapshot(snapshot => {
                setdata(
                    formatTaskData(snapshot.docs)
                //     snapshot.docs.map(doc => ({
                //     id : doc.id,
                //     title : doc.data().title,
                //     description : doc.data().description,
                //     status : doc.data().status
                // }))
                
                )
            })
        }
    },[uid])

    const [pending, setpending] = useState([])
    const [progress, setprogress] = useState([])
    const [completed, setcompleted] = useState([])


    const formatTaskData = (data) => {
        console.log(data)
        const a = [];
        const b = [];
        const c = [];
        const abc= data.map(doc => {
            const task = {
                id : doc.id,
                title : doc.data().title,
                description : doc.data().description,
                status : doc.data().status
            }
            console.log("Status", task.status)
            if(task.status==="pending") {   
                a.push(task)
                setpending(a)

            }
            else if(task.status==="progress") { 
                b.push(task)  
                setprogress(b)
            }
            else {   
                c.push(task) 
                setcompleted(c)
            }
            return task
        })
        console.log("ac",abc)
        
        return abc;
    }
    console.log("pending",pending)

    // const pending =  data.filter(data => {
    //     if(data.status ==="pending") {
    //         return data
    //     }
    // })
    // const progress =  data.filter(data => {
    //     if(data.status ==="progress") {
    //         return data
    //     }
    // })
    // const completed =  data.filter(data => {
    //     if(data.status ==="completed") {
    //         return data
    //     }
    // })

    return (
        <div>
            View
            {uid && <p>{uid}</p>}
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <h4>Pending</h4>
                        {pending.map(data => <Grid id={data.id} title={data.title} description={data.description} status={data.status}></Grid>)}
                    </div>
                    <div className="col-4">
                    <h4>In Progress</h4>
                    {progress.map(data => <Grid id={data.id} title={data.title} description={data.description} status={data.status}></Grid>)}
                    </div>
                    <div className="col-4">
                    <h4>completed</h4>
                    {completed.map(data => <Grid id={data.id} title={data.title} description={data.description} status={data.status}></Grid>)}
                    </div>
                </div>
            </div>

           
            


        </div>
    )
}
export default View
