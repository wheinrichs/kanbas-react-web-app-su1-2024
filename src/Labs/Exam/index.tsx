import { Link, Route, Routes, useLocation, useParams } from "react-router-dom";
import StyleTestComponents from "./StyleTestComponents";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as client from "./client";

export default function Exam() {
  const [welcome, setWelcome] = useState();

  const fetch_welcome = async () => {
    const message = await client.fetchWelcomeMessage();
    setWelcome(message);
  };

  useEffect(() => {
    fetch_welcome()
  }, [])

  return(
   <div>
    <h1>{welcome}</h1>
  </div>
  )
}