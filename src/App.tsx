import React, { Reducer, useEffect, useReducer, useState } from "react";
import {v4 as uuidv4} from 'uuid';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import "./App.css";
import TaskCard from "./components/TaskCard";
import List from "./components/List";
import { Task } from "./types";
import ControlledModal from "./components/Modal";
import { useLocalStorage } from "../src/hooks/useLocalStorage";
import {reducer, ActionType, StateType} from './hooks/reducer';
//read/write to json file -> make custom hook ->https://www.pluralsight.com/guides/fetch-data-from-a-json-file-in-a-react-app
// https://www.linkedin.com/learning/react-design-patterns/usedatasource-hook?autoAdvance=true&autoSkip=true&autoplay=true&contextUrn=urn%3Ali%3AlyndaLearningPath%3A593715e0498e9e9be7fb8506&resume=false&u=94420922
//state management -useReducer:
// add, edit, delete, move
//drag and drop functionality
//styling
//input validation
//possible to move to different list by button

//useinput hook
//input flow
// possible to delete item
//possible to edit item
//make responsive
//add login etc.
//commit and upload to github
//button component

function App() {
  const [input, setInput] = useState("");
  const [shouldShowModal, setShouldShowModal] = useState(false);
  const [tasks, setTasks] = useLocalStorage<Task[]>("tasks", []);
  const [state, dispatch] = useReducer<Reducer<Task[], ActionType>>(reducer, tasks)

  return (
    <div className="App">
      <ControlledModal
        shouldShow={shouldShowModal}
        onRequestClose={() => setShouldShowModal(false)}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="walk the dog"
        />
        <button
          onClick={() => {
            setTasks([
              ...tasks,
              { id: uuidv4(), name: input, status: "BACKLOG" },
            ]);
            dispatch({type: 'add', payload:  { id: uuidv4(), name: input, status: "BACKLOG" }});
            console.log('state', state)
            setInput("");
            setShouldShowModal(false);
          }}
        >
          Add task
        </button>
      </ControlledModal>
      <button onClick={() => setShouldShowModal(!shouldShowModal)}>
        New task
      </button>
      <List
        css={css`
          background-color: lightgrey;
        `}
      >
        <>
          {tasks
            .filter((item) => item.status === "BACKLOG")
            .map((item) => (
              <>
              <TaskCard key={item.id}>{item.name}</TaskCard>
              <button onClick={()=>dispatch({type: 'delete', payload: {id: item.id, name: item.name, status: item.status}})}>forget about it</button>
              {console.log('state after delete',state)}
              </>
            ))}
        </>
      </List>
      <List
        css={css`
          background-color: pink;
        `}
      >
        {tasks
          .filter((item) => item.status === "DOING")
          .map((item) => (
            <TaskCard key={item.id}>{item.name}</TaskCard>
          ))}
      </List>
      <List
        css={css`
          background-color: yellowgreen;
        `}
      >
        {tasks
          .filter((item) => item.status === "DONE")
          .map((item) => (
            <TaskCard key={item.id}>{item.name}</TaskCard>
          ))}
      </List>
    </div>
  );
}

export default App;
