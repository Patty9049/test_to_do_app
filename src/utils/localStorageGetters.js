export const getTodosFromLocalStorage = () => {
    let localStorageTodos;
  
    if (localStorage.getItem("todos")) {
      localStorageTodos = JSON.parse(localStorage.getItem("todos"));
    } else {
      localStorageTodos = [];
    }
  
    return localStorageTodos;
  };