import { v4 as uuidv4 } from "uuid";

interface INTTodoTasks {
  id: string;
  task: string;
  user: string;
  completed: boolean;
  isEditing: boolean;
  nType: string;
  date: string;
}
/********************************************************** */
//*****************FUNCTION to addTodo Task**************** */
export const addTodoTask = (
  todo: string,
  type: string,
  date: string,
  todos: INTTodoTasks[]
) => {
  const newTodoTask = {
    id: uuidv4(),
    task: todo,
    completed: false,
    isEditing: false,
    nType: type,
    date: date,
  };
  const newTodos = [...todos, newTodoTask];
  //store the updated todos state in LocalStorage
  localStorage.setItem("todosLocal", JSON.stringify(newTodos));
  return newTodos;
};
/********************************************************** */
//*****************FUNCTION to delete a Task**************** */
export const deleteTodo = (id: string, todos: INTTodoTasks[]) => {
  const updatedTodos = todos.filter((todo) => todo.id !== id);
  //store the updated todos state in LocalStorage
  localStorage.setItem("todosLocal", JSON.stringify(updatedTodos));
  return updatedTodos;
};

/********************************************************** */
//*****************FUNCTION to change the Completed status a Task**************** */
//by using the map function we can loop through the todos array and change the status of the todo
//that matches the id that was passed in
export const toggleComplete = (id: string, todos: INTTodoTasks[]) => {
  const updatedTodos = todos.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
  //store the updated todos state in LocalStorage
  localStorage.setItem("todosLocal", JSON.stringify(updatedTodos));
  return updatedTodos;
};

/********************************************************** */
//*****************FUNCTION to change the Edit status a Task**************** */
export const editTodo = (id: string, todos: INTTodoTasks[]): INTTodoTasks[] => {
  const updatedTodos = todos.map((todo) =>
    todo.id === id ? { ...todo, isEditing: true } : todo
  );
  //change the editing status in localStorage
  localStorage.setItem("todosLocal", JSON.stringify(updatedTodos));
  return updatedTodos;
};

/********************************************************** */
/********************************************************** */
//function to finish the editing process //ends the editing status
export const finishEdit = (
  task: string,
  type: string,
  date: string,
  id: string,
  todos: INTTodoTasks[]
) => {
  const updatedTodos = todos.map((todo) =>
    todo.id === id
      ? {
          ...todo,
          task: task,
          nType: type,
          date: date,
          isEditing: false,
        }
      : todo
  );
  //change the editing status in localStorage
  localStorage.setItem("todosLocal", JSON.stringify(updatedTodos));
  return updatedTodos;
};
