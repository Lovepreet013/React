import React from 'react';
export default class Todo extends React.Component {
  state = {
    todos: [],
    text: "",
    editingTodoId: null,
    editingText: "",
    restoreTodo: []
  };
  handleChange = e => {
    this.setState({
      text: e.target.value
    });
  };
  handleEditChange = e => {
    this.setState({
      editingText: e.target.value
    });
  };
  handleChecked = id => {
    this.setState(() => ({
      todos: this.state.todos.map(todo => todo.id == id ? {
        ...todo,
        checked: !todo.checked
      } : todo)
    }));
  };
  addTodo = () => {
    const newTodo = {
      id: Date.now(),
      value: this.state.text,
      checked: false
    };
    this.setState(prevState => ({
      todos: [...prevState.todos, newTodo],
      text: ""
    }));
    alert("Note Added!");
  };
  startEditTodo = (id, value) => {
    this.setState({
      editingTodoId: id,
      editingText: value
    });
  };
  saveTodo = id => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => todo.id === id ? {
        ...todo,
        value: prevState.editingText,
        checked: false
      } : todo),
      editingTodoId: null,
      editingText: ""
    }));
    alert("Note Updated!");
  };
  deleteTodo = id => {
    this.restoreTodo = this.state.todos.find(todo => todo.id === id);
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== id)
    }));
    alert("Note Deleted!");
  };
  render() {
    return <div>
                <h1>My TODO</h1>
                <input type="text" value={this.state.text} onChange={this.handleChange} />
                <button onClick={this.addTodo}>Add Note</button>

                <h3>Todos: {this.state.todos.length}</h3>
                <ul>
                    {this.state.todos.map(todo => <div key={todo.id}>
                            {this.state.editingTodoId === todo.id ? <>
                                    <input type="text" value={this.state.editingText} onChange={this.handleEditChange} />
                                    <button onClick={() => this.saveTodo(todo.id)}>Save</button>
                                    <button onClick={() => this.setState({
              editingTodoId: null,
              editingText: ""
            })}>
                                        Cancel
                                    </button>
                                </> : <div style={{
            display: "flex",
            gap: "10px",
            alignItems: "center"
          }}>
                                    <input type="checkbox" value={todo.checked} onChange={() => this.handleChecked(todo.id)} />
                                    <p style={{
              textDecoration: todo.checked ? "line-through" : "none"
            }}>{todo.value}</p>
                                    <button onClick={() => this.startEditTodo(todo.id, todo.value)}>Edit</button>
                                    <button onClick={() => this.deleteTodo(todo.id)}>Delete</button>
                                </div>}
                        </div>)}
                </ul>
            </div>;
  }
}