import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface TaskCardProps{
  children: JSX.Element | JSX.Element[]| string;
  className?: string;

}
  const TaskCard = ({children}: TaskCardProps)=>{
    return(
      <div onDragStart={(e)=>{console.log('dragging', e.target)}} draggable="true" css={css`background-color: antiquewhite; padding: 1rem; margin: 0.5rem;`}>
        {children}
      </div>
    )
  }

  export default TaskCard;