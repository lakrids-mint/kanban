import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";



  const Input = ()=>{
    return(
      <div>
          <label htmlFor="task">Add new task</label>
          <input type="text" id="task"/>
       </div>
    )
  }

  export default Input;