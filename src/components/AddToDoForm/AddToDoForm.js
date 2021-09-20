import React from "react";
import styles from "./AddToDoForm.module.css";

const AddToDoForm = ({ addToDo }) => {
  return (
    <form className={styles.form} onSubmit={addToDo}>
      <input
        type="text"
        name="toDoTitle"
        placeholder="Type to do title.."
        required
      />
      <textarea
        type="text"
        name="toDoContent"
        placeholder="Type to do content.."
        cols="30"
        rows="10"
        required
      />
      <label htmlFor="toDoPriority">Choose todo priority: </label>
      <select name="toDoPriority" id="toDoPriority">
        <option value="low">low</option>
        <option value="medium">medium</option>
        <option value="high">high</option>
      </select>

      <button className={styles.btn} type="submit">
        + add todo
      </button>
    </form>
  );
};

export default AddToDoForm;