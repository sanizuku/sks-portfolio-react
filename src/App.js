import About from "./components/About";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import ProjectDetails from "./components/ProjectDetails";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/project-details",
          element: <ProjectDetails />,
        },
        {
          path: "portfolio",
          element: <Portfolio />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "experience",
          element: <Experience />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
      ],
    },
  ]);
  return (
    <RouterProvider router={appRouter} />
    // {
    /* <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <SocialLinks /> */
    // }
  );
}

export default App;
