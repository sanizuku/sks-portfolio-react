// src/App.js
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Body from "./components/Body";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Body />, // Layout wrapper
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "portfolio", element: <Portfolio /> },
        { path: "skill", element: <Skills /> },
        { path: "contact", element: <Contact /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
