import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Task } from "../types";
import TaskCard from "./TaskCard";

interface ListProps {
  list: Task[];
  listType: "BACKLOG" | "DOING" | "DONE";
  className?: string;
}
//get status and filter based on that
const List = ({ list, className, listType }: ListProps) => {
  return (
    <div className={className}>
      {list
        .filter((item) => item.status === listType)
        .map((task) => (
          <TaskCard key={task.id}>{task.name}</TaskCard>
        ))}
    </div>
  );
};

export default List;
