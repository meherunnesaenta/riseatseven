import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layout/RootLayout";

export const router = createBrowserRouter([

  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: () => <div className="bg-red-600">About</div>
      }
    ]
  },

]);
