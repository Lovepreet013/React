import React from "react";
export default class Controlled extends React.Component {
  state = {
    username: '',
    isValid: false
  };
  changeUsername = e => {
    const {
      value
    } = e.target;
    this.setState(() => ({
      username: value,
      isValid: value.length > 3
    }));
  };
  submitForm = e => {
    e.preventDefault();
    alert(`Hello ${this.state.username}`);
  };
  render() {
    return <form method="post" onSubmit={this.submitForm}>
            <p>this is Controlled form</p>
          
          <p>
            <input type="text" name="username" onChange={this.changeUsername} value={this.state.username} />
            <input type="submit" disabled={!this.state.isValid} />
            <p>{this.state.username}</p>
          </p>
      </form>;
  }
}
export class ControlledComponents extends React.Component {
  state = {
    text: '',
    textarea: '',
    checkbox: false,
    singleSelect: '',
    multipleSelect: [],
    notes: [],
    note: "",
    newNote: {}
  };
  changeValue = ({
    target: {
      name,
      value
    }
  }) => {
    this.setState(() => ({
      [name]: value
    }));
  };
  changeCheckbox = ({
    target: {
      name,
      checked
    }
  }) => {
    this.setState(() => ({
      [name]: checked
    }));
  };
  changeSelect = ({
    target: {
      name,
      value,
      selectedOptions,
      multiple
    }
  }) => {
    if (multiple) {
      value = Array.from(selectedOptions).map(option => option.value);
    }
    this.setState(() => ({
      [name]: value
    }));
  };
  handleNotes = e => {
    const {
      value
    } = e.target;
    this.setState(() => ({
      note: value,
      newNote: {
        id: this.state.notes.length + 1,
        value: value,
        checked: false
      }
    }));
  };
  addNote = e => {
    e.preventDefault();
    this.setState(() => ({
      notes: [...this.state.notes, this.state.newNote]
    }));
    alert("Note added");
    this.setState(() => ({
      note: ""
    }));
  };
  deleteNote = id => {
    this.setState(() => ({
      notes: this.state.notes.filter(note => note.id !== id)
    }));
  };
  handleCheckboxChange = id => {
    this.setState(prevState => ({
      notes: prevState.notes.map(note => note.id === id ? {
        ...note,
        checked: !note.checked
      } : note)
    }));
  };
  render() {
    return <form>
            <h1>Json Data</h1>
            <pre>{JSON.stringify(this.state, null, 2)}</pre>
            <br /><br />
            <h2>Text</h2>
            <input type="text" name="text" value={this.state.text} onChange={this.changeValue} onClick={this.renderEventTarget} />
            <br /><br />
            <h2>Text Area</h2>
            <textarea name="textarea" value={this.state.textarea} onChange={this.changeValue} />
            <br /><br />
            <h2>Checkbox</h2>
            <input type="checkbox" name="checkbox" checked={this.state.checkbox} onChange={this.changeCheckbox} />
            <br /><br />
            <h2>Single Select</h2>
            <select name="singleSelect" value={this.state.singleSelect} onChange={this.changeValue}>
              <option value="">Please select</option>
              <option value="1">One</option>
              <option value="2">Two</option>
            </select>
            <br /><br />
            <h2>Multiple Select</h2>
            <select name="multipleSelect" value={this.state.multipleSelect} onChange={this.changeSelect} multiple>
              <option value="1">One</option>
              <option value="2">Two</option>
            </select>
            <br /><br />
            <h2>Radio</h2>
            <input type="radio" name="radio" value="1" checked={this.state.radio === '1'} onChange={this.changeValue} />
            <span></span>
            <input type="radio" name="radio" value="2" checked={this.state.radio === '2'} onChange={this.changeValue} />

            <label htmlFor="notes">Notes</label>
            <input type="text" value={this.state.note} onChange={this.handleNotes} />
            <button onClick={this.addNote}>Add Note</button>
            {this.state.notes.map(note => <div key={note.id} style={{
        display: "flex",
        alignItems: "center"
      }}>
                    <input type="checkbox" checked={note.checked} onChange={() => this.handleCheckboxChange(note.id)} />
                    <p style={{
          textDecoration: note.checked ? "line-through" : "none"
        }}>{note.value}</p>
                    <button onClick={() => this.deleteNote(note.id)}>Delete</button>
                </div>)}

            {}
          </form>;
  }
}