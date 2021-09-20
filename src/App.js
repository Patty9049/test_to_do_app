import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import AddToDoForm from "./components/AddToDoForm/AddToDoForm";
import TodoList from "./components/TodoList/TodoList";
import styles from "./App.module.css";
import Footer from "./components/Footer/Footer";
import { getTodosFromLocalStorage } from "./utils/localStorageGetters";

class App extends Component {
  state = {
    todos: getTodosFromLocalStorage(),
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos !== this.state.todos) {
      this.setTodosToLocalStorage();
    }
  }

  setTodosToLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
  };

  addToDo = (e) => {
    e.preventDefault();

    const toDoId = uuidv4();
    const toDoTitle = e.target.toDoTitle.value;
    const toDoContent = e.target.toDoContent.value;
    const toDoPriority = e.target.toDoPriority.value;

    const todo = {
      toDoId,
      toDoTitle,
      toDoContent,
      toDoPriority,
      completed: false,
      isEditing: false,
    };

    this.setState({
      todos: [...this.state.todos, todo],
    });

    e.target.reset();
  };

  removeToDo = (toDoId) => {
    const filteredTodos = this.state.todos.filter(
      (todo) => todo.toDoId !== toDoId
    );
    this.setState({
      todos: [...filteredTodos],
    });
  };

  completeTodo = (toDoId) => {
    const completedTodos = this.state.todos.map((el) => {
      if (el.toDoId === toDoId) {
        el.completed = !el.completed;
      }
      return el;
    });

    console.log(completedTodos);

    this.setState({
      todos: [...completedTodos],
    });
  };

  editToDo = (toDoId, e) => {
    const editedTodos = this.state.todos.map((el) => {
      if (el.toDoId === toDoId) {
        el.isEditing = !el.isEditing;
      }
      return el;
    });

    console.log(editedTodos);

    this.setState({
      todos: [...editedTodos],
    });
  };

  handleEditInputChange = (toDoId, inputType, e) => {
    const mapedTodos = this.state.todos.map((todo) => {
      if (todo.toDoId === toDoId) {
        todo[inputType] = e.target.value;
      }
      return todo;
    });

    this.setState({
      todos: [...mapedTodos],
    });
  };

  render() {
    return (
      <div className={styles.app}>
        <h2>Todo App</h2>
        <AddToDoForm addToDo={this.addToDo} />

        <TodoList
          todoList={this.state.todos}
          removeToDo={this.removeToDo}
          completeTodo={this.completeTodo}
          editToDo={this.editToDo}
          handleEditInputChange={this.handleEditInputChange}
        />
        <Footer />
      </div>
    );
  }
}

export default App;