import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {Task } from '../types';


interface TaskCardProps{
  children: JSX.Element | JSX.Element[]| string;
  className?: string;

}
  const TaskCard = ({id, name , status}: Task)=>{
    return(
      <div draggable="true" css={css`background-color: antiquewhite; padding: 1rem; margin: 0.5rem;`}>
        {name}
      </div>
    )
  }

  export default TaskCard;