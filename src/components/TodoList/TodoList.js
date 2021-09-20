import React from "react";
import "./TodoList.css";
import styles from "./TodoList.module.css";
import { Grid, Row } from "react-flexbox-grid";

const TodoList = ({
  todoList,
  removeToDo,
  completeTodo,
  editToDo,
  handleEditInputChange,
}) => {
  return (
    <Grid>
      <h2>Todo List</h2>
      <ul className={styles.todolist}>
        {todoList.map((todo) => {
          const {
            toDoPriority,
            toDoId,
            toDoTitle,
            toDoContent,
            completed,
            isEditing,
          } = todo;
          console.log("PROPRITY", toDoPriority);
          console.log("to PROPRITY", typeof toDoPriority);

          return (
            <li className={toDoPriority} key={toDoId}>
              {isEditing ? (
                <>
                  <input
                    className={styles.inputTitle}
                    name="toDoTitle"
                    placeholder="Type to do title..."
                    onChange={(e) =>
                      handleEditInputChange(toDoId, "toDoTitle", e)
                    }
                  />
                  <input
                    className={styles.inputContent}
                    name="inputContent"
                    placeholder="Type to do content..."
                    onChange={(e) =>
                      handleEditInputChange(toDoId, "toDoContent", e)
                    }
                    disabled={isEditing ? false : true}
                  />
                </>
              ) : (
                <>
                  <h3 name="toDoTitle" className={styles.title}>
                    {toDoTitle}
                  </h3>
                  <h3 name="inputContent" className={styles.inputContent}>
                    {toDoContent}
                  </h3>
                  <div
                    className={
                      completed
                        ? `${styles.close} ${styles.completed}`
                        : `${styles.close}`
                    }
                  ></div>
                </>
              )}
              <Row className={styles.row}>
                <button
                  className={styles.btn}
                  onClick={() => completeTodo(toDoId)}
                >
                  {completed ? "not complete" : "complete"}
                </button>
                <button className={styles.btn} onClick={() => editToDo(toDoId)}>
                  {isEditing ? "save" : "edit"}
                </button>
                <button
                  className={styles.btn}
                  onClick={() => removeToDo(toDoId)}
                >
                  delete
                </button>
              </Row>
            </li>
          );
        })}
      </ul>
    </Grid>
  );
};

export default TodoList;