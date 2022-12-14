import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ToDoList from "../pages/ToDoList";
import Todo from "../pages/Todo";
import Layout from "./Layout";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {<Route path="/" element={<ToDoList />} />}
          {<Route path="/:id" element={<Todo />} />}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
