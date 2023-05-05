
//initial state is an array of todos
const initialState = [{
    id: 1,
    todo: 'Buy Bread',
    done: false

}];

//reducer is a simple function, receives the state and a action
// if this function doesn't receive any state, then it will be initial satate
const todoReducer = ( state = initialState, action ) => {
    //if the action's type is add a new state will be added
    if( action?.type === 'add' ) {
        return [ ...state, action.payload ]
    }
} 

//variable todos 
let todos = todoReducer();

//new todo to add
const newTodo = {
    id: 12,
    todo: 'Buy Milk',
    done: false
}

//the action for the reducer
const todoActionAdd = {
    type: 'add',
    payload: newTodo
}

// calling the useReducer passing as parameter where will be added and the action
todos = todoReducer( todos, todoActionAdd );


console.log(todos)