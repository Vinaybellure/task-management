import { createSlice} from '@reduxjs/toolkit'


export const todoSlice = createSlice({
    name : 'todos',
    initialState : {
        todoList : []
    },
    reducers : {
        saveTodo : (state,action) => {
            state.todoList.push(action.payload)
        },
        setCheck : (state,action) => {
            return {
                ...state,
                todoList: state.todoList.filter(({id}) => id !== action.payload)
            }
        }
    }
})

export const {saveTodo, setCheck} = todoSlice.actions

// For Viewing the data 
export const selectTodoList = state => state.todos.todoList

export default todoSlice.reducer