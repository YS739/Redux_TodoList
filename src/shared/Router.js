import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ToDoList from "../pages/ToDoList";
import Todo from "../pages/Todo";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {<Route path="/" element={<ToDoList />} />}
        {<Route path="/:id" element={<Todo />} />}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
