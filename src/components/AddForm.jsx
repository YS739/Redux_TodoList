import { useState } from "react";
import { useDispatch } from "react-redux";

const AddForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();
};
