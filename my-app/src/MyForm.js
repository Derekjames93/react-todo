import React, { Component } from 'react';

class MyForm extends Component {
    constructor(){
        super();
        this.state = {
            todos: [],
            newTodo: ''
        }
    }

handleClick = (event) => {
    event.preventDefault()
    
    const theTodo = this.state.newTodo
    const newTodos = this.state.todos.concat(theTodo)
    this.setState({
        todos:newTodos
    })
    // const theTodo = this.state.todo

    // this.setState({newTodo})
    
}

handleChange = (event) => {
    event.preventDefault()

    if(event.target.value === null){
        return
    }else {
        this.setState({
            newTodo:event.target.value
        })
    }
}

removeItem = (index) => {
    console.log(index)
    const theTodo = [...this.state.todos]
    theTodo.splice(index,1)
    console.log(theTodo)
    
    this.setState({
        todos:theTodo
    })
}



// displayTodo = (event) => {
//     if(event.target.value === null){
//         alert
//     }
// }

// `<li>${task}</li>`


    render(){
        return (
            <form>
                <label>
                    Add Task
                    <br></br>
                    <br></br>
                    <input type="text" value={this.state.newTodo} onChange={this.handleChange} />
                </label>
            <button onClick={this.handleClick} value="">Send it</button>
            <br></br>
            <br></br>
            <div>
            My Tasks
            <ul className="todos">
                {this.state.todos.map((todo,index) => {
                    return <li key={index}>{todo}
                    <button type="button"  onClick={()=> {this.removeItem(index)}}>Remove</button>
                    <button type="button"  >Done</button>
                    </li>
                })}
            </ul>

            </div>
            <label>
            <br></br>
            Complete Tasks
            

            </label>
            </form>
        )
    }
}

export default MyForm