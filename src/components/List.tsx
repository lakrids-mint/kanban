import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface ListProps{
  children: JSX.Element | JSX.Element[];
  className?: string;
}
//get status and filter based on that
  const List = ({children, className}:ListProps)=>{
    return(
      <div className={className}>
        {children}
      </div>
    )
  }

  export default List;