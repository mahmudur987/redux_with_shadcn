import Note from "@/Pages/Note";
import App from "../App";
import { createBrowserRouter } from "react-router";
import User from "@/Pages/User";
import Task from "@/Pages/Task";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        Component: Note,
      },
      {
        path: "user",
        Component: User,
      },
      {
        path: "task",
        Component: Task,
      },
    ],
  },
]);

export default router;
