import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ToDoList from "../pages/TodoList";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ToDoList />} />
        {/* <Route path="/:id" element={<Work />} /> */}
        {/* work 대신 Todo 넣기(import하고) */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
