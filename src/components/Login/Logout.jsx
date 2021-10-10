import React from 'react';
import firebase from 'firebase';
import Button from '../Common_components/Button'

const logOutUser = () => {
 firebase.auth().signOut();
};

const LogOut = () => {
 return <Button onClick={logOutUser}  name="Log Out"/>;
};

export default LogOut;