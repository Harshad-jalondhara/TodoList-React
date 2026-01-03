import { useState } from "react";

const TodoList = () => {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]); // array jisme sab todo items store honge

  const handleSubmit = (event) => {
    event.preventDefault(); // Form submit hone par page reload hota hai
    if(newTodo){
        setTodos([...todos, {text:newTodo, completed: false} ]) // ...todos -> purani value store rakha ta hai
        setNewTodo("");
    }
  };

  const handleDelete = (index) => {
    const newTodoList = [...todos]; // ...todos value = newTodoList ma save thay
    console.log(...todos); // confirmation print

    newTodoList[index].completed = !newTodoList[index].completed // value true = false and false = true
    setTodos(newTodoList); // newTodoList ne value => setTodos ma save kare
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add New Todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button type="sumbit">ADD</button>
      </form>
        
    
      <ul>
        {
            // todos = state array (saare todo items)
            // map() = array ke har item par loop
            // todo = current todo object  { text, completed }
            // index = current todo ka position (0,1,2...)
            todos.map((todo, index) => (
                <li key={index}>
                    <span style={{textDecoration: todo.completed ? "line-through" : "none"}}>
                        {todo.text} 
                    </span>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                </li>
            ))
        }
      </ul>

    </div>
  );
};

export default TodoList;
