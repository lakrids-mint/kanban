import { useLocalStorage } from "./useLocalStorage";
import { Task } from "../types";

export type ActionType = 
| { type: "add"; payload: Task }
| { type: "delete"; payload: Task }
| { type: "edit"; payload: Task }
| { type: "move"; payload: Task };
export type StateType = {
  tasks: Task[];
};
export const reducer = (state: Task[], action: ActionType): Task[] => {
    const [items, setItems] = useLocalStorage('tasks', state);
  switch (action.type) {
    case "add":
        setItems([
            ...items,
            action.payload,
          ]);
      return [...state, action.payload];
    case "delete":
      console.log("delete", state);
      return state.filter(task=> task.id !== action.payload.id);
    case "move":
      console.log("move");
      //we need the task to be moved id and the desired status of the task
      return [];
    case "edit":
      console.log("edit");
      //we need the id of the task to be edited and the edited content
      //find the task to be edited and filter it from the other tasks
      // edit task and put it back in the task array
      
      return [...state.filter(task=> task.id !== action.payload.id), action.payload];
    default:
      throw new Error();
  }
};
