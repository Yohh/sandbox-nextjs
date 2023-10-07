"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { createTask } from "../actions";
import { Task } from "./TaskCard";

export interface NewTask {
  title: string;
  content: string;
}

const TaskModal = () => {
  const [taskTitle, setTaskTitle] = useState<string>();
  const [taskContent, setTaskContent] = useState<string>();
  const [task, setTask] = useState<NewTask>();

  useEffect(() => {
    setTask({
      title: taskTitle as string,
      content: taskContent as string,
    });
  }, [taskTitle, taskContent]);

  return (
    <div className="absolute top-0 left-0 w-screen h-screen flex flex-col justify-center items-center backdrop-blur-sm">
      <form className="w-1/3 h-1/4 bg-orange-400 rounded-2xl flex flex-col justify-around items-center px-4 border-t-2 border-t-orange-600 border-b-2 border-b-orange-600 shadow-xl">
        <h1 className="font-bold">new Task</h1>
        <div className="flex justify-between w-4/5">
          <label htmlFor="taskTitle">title:</label>
          <input
            className="rounded w-2/3"
            type="text"
            id="taskTitle"
            maxLength={20}
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            autoFocus
          />
        </div>
        <div className="flex justify-between w-4/5">
          <label htmlFor="taskContent">content:</label>
          <input
            className="rounded w-2/3"
            type="text"
            id="taskContent"
            maxLength={50}
            value={taskContent}
            onChange={(e) => setTaskContent(e.target.value)}
          />
        </div>
        <div className="ml-auto mr-5">
          <Link href="/">
            <button
              className="w-8 px-1 m-1 z-10 rounded bg-red-600 hover:bg-red-400 text-white"
              type="button"
            >
              &#10007;
            </button>
          </Link>
          <Link href="/">
            <button
              className="w-8 px-1 m-1 rounded bg-green-600 hover:bg-green-400 text-white"
              type="submit"
              onClick={() => createTask(task as NewTask)}
            >
              &#10003;
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default TaskModal;
