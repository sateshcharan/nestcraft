import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { FileContextProvider } from "./context/FileContext";
import { ThemeProvider } from "./context/theme-provider";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Workbench from "./pages/Workbench";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
      ],
    },
    {
      path: "workbench",
      element: <Workbench />,
    },
  ]);

  return (
    <FileContextProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </FileContextProvider>
  );
}

export default App;
