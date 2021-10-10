import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userName : null,
    userEmail : null
}

const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers : {
        setActiveUser : (state,action) => {
            state.userName = action.payload.userName
            state.userEmail = action.payload.userEmail
},
        setUserLogOutState : state => 
        {  
            state.userName = null
            state.userEmail = null 
        }
    }
});

export const {setActiveUser,setUserLogOutState } = userSlice.actions

export const selectUserName = state => state.user.userName  // Returing the avlue from state 
export const selectUserEmail = state => state.user.userEmail // Returing the avlue from state 

export default userSlice.reducer 