import { v4 as uuidv4 } from "uuid";

interface INTTodoTasks {
  id: string;
  task: string;
  user: string;
  completed: boolean;
  taskorreminder: string;
  isEditing: boolean;
  nType: string;
  date: string;
  archived: boolean;
}
/********************************************************** */
//*****************FUNCTION to addTodo Task**************** */
//Not possible to do for now

/********************************************************** */
//*****************FUNCTION to delete a Task**************** */
export const deleteTodoFunction = (
  id: string,
  todos: INTTodoTasks[],
  localStorageFile: string
) => {
  const updatedTodos = todos.filter((todo) => todo.id !== id);
  //store the updated todos state in LocalStorage
  localStorage.setItem(`${localStorageFile}`, JSON.stringify(updatedTodos));
  return updatedTodos;
};

/********************************************************** */
//*****************FUNCTION to change the Completed status a Task**************** */
//by using the map function we can loop through the todos array and change the status of the todo
//that matches the id that was passed in
export const toggleCompleteFunction = (
  id: string,
  todos: INTTodoTasks[],
  localStorageFile: string
) => {
  const updatedTodos = todos.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
  //store the updated todos state in LocalStorage
  localStorage.setItem(`${localStorageFile}`, JSON.stringify(updatedTodos));
  return updatedTodos;
};

/********************************************************** */
//*****************FUNCTION to change the Edit status a Task**************** */
export const editTodoFunction = (
  id: string,
  todos: INTTodoTasks[],
  localStorageFile: string
): INTTodoTasks[] => {
  const updatedTodos = todos.map((todo) =>
    todo.id === id ? { ...todo, isEditing: true } : todo
  );
  //change the editing status in localStorage
  localStorage.setItem(`${localStorageFile}`, JSON.stringify(updatedTodos));
  return updatedTodos;
};

/********************************************************** */
/********************************************************** */
//function to finish the editing process //ends the editing status
export const finishEditFunction = (
  task: string,
  type: string,
  date: string,
  taskorreminder: string,
  id: string,
  todos: INTTodoTasks[],
  localStorageFile: string
) => {
  const updatedTodos = todos.map((todo) =>
    todo.id === id
      ? {
          ...todo,
          task: task,
          nType: type,
          date: date,
          taskorreminder: taskorreminder,
          isEditing: false,
        }
      : todo
  );
  //change the editing status in localStorage
  localStorage.setItem(`${localStorageFile}`, JSON.stringify(updatedTodos));
  return updatedTodos;
};

/********************************************************** */
/********************************************************** */
//function to archive a task
export const archiveTaskFunction = (
  ids: string[],
  todos: INTTodoTasks[],
  localStorageFile: string
) => {
  //filter the archived items
  const updatedTodos = todos.filter((todo) => ids.includes(todo.id));
  //store the updated todos state in LocalStorage
  localStorage.setItem(`${localStorageFile}`, JSON.stringify(updatedTodos));
  return updatedTodos;
};
