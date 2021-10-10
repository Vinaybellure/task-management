import React, { useContext } from 'react'; 
import { useState, useEffect } from 'react';
import LogOut from '../Login/Logout';
import Add_task from '../Add_task/Add_task';
import View from './View'
import {UserContext} from '../Context/UserContext';
import Button from '../Common_components/Button';


const Home = (props) => { 
  const uid = useContext(UserContext)

  const handleClick = () => {
    props.history.push("/addtask");
  }
  
  const button = <Button onClick={handleClick} name="ADD A TASK"></Button>
  return (
      <div>
        <LogOut />
          {button}
          <h1>Home page </h1>
          <View/>
          
      </div> 
  ); 
}; 
export default Home;