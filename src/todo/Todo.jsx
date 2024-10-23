import React from 'react';

export default class Todo extends React.Component {
    state = {
        todos: [],
        text: "",
        editingTodoId: null, // id of the todo being edited
        editingText: "", // current value for the todo being edited,
        restoreTodo : []
    };

    handleChange = (e) => {
        this.setState({ text: e.target.value });
    };

    handleEditChange = (e) => {
        this.setState({ editingText: e.target.value });
    };

    handleChecked = (id) => {
        this.setState(() => ({
            todos : this.state.todos.map((todo) => todo.id == id ? {...todo, checked : !todo.checked} : todo)
        }))
    }

    addTodo = () => {
        const newTodo = {
            id: Date.now(),
            value: this.state.text,
            checked : false
        };

        this.setState((prevState) => ({
            todos: [...prevState.todos, newTodo],
            text: "",
        }));

        alert("Note Added!");
    };

    startEditTodo = (id, value) => {
        this.setState({
            editingTodoId: id, // Start editing this todo
            editingText: value, // Set current value to edit
        });
    };

    saveTodo = (id) => {
        this.setState((prevState) => ({
            todos: prevState.todos.map((todo) =>
                todo.id === id ? { ...todo, value: prevState.editingText, checked : false } : todo
            ),
            editingTodoId: null, // Stop editing
            editingText: "", // Clear the edit text
        }));

        alert("Note Updated!");
    };

    deleteTodo = (id) => {
       this.restoreTodo = this.state.todos.find((todo) => todo.id === id)
        this.setState((prevState) => ({
            todos: prevState.todos.filter((todo) => todo.id !== id),
        }));

        alert("Note Deleted!");
    };

    render() {
        return (
            <div>
                <h1>My TODO</h1>
                <input type="text" value={this.state.text} onChange={this.handleChange} />
                <button onClick={this.addTodo}>Add Note</button>

                <h3>Todos: {this.state.todos.length}</h3>
                <ul>
                    {this.state.todos.map((todo) => (
                        <div key={todo.id}>
                            {this.state.editingTodoId === todo.id ? (
                                // Show input for editing
                                <>
                                    <input
                                        type="text"
                                        value={this.state.editingText}
                                        onChange={this.handleEditChange}
                                    />
                                    <button onClick={() => this.saveTodo(todo.id)}>Save</button>
                                    <button onClick={() => this.setState({ editingTodoId: null, editingText: "" })}>
                                        Cancel
                                    </button>
                                </>
                            ) : (
                                // Show the todo item with Edit and Delete buttons
                                <div style={{display : "flex", gap : "10px", alignItems : "center"}}>
                                    <input type="checkbox" value={todo.checked} onChange={() => this.handleChecked(todo.id)}/>
                                    <p style={{textDecoration : todo.checked ? "line-through" : "none"}}>{todo.value}</p>
                                    <button onClick={() => this.startEditTodo(todo.id, todo.value)}>Edit</button>
                                    <button onClick={() => this.deleteTodo(todo.id)}>Delete</button>
                                </div>
                            )}
                        </div>
                    ))}
                </ul>
            </div>
        );
    }
}

