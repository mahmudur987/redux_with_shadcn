import type { ITask } from "@/Interfaces/state.interface";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  tasks: ITask[];
}

const initialState: InitialState = {
  tasks: [
    {
      id: "1",
      title: "Task 1",
      description: "Description for Task 1",
      dueDate: "2022-01-01",
      isComplete: false,
      priority: "high",
    },
    {
      id: "2",
      title: "Task 2",
      description: "Description for Task 2",
      dueDate: "2022-01-02",
      isComplete: true,
      priority: "medium",
    },
    {
      id: "3",
      title: "Task 3",
      description: "Description for Task 3",
      dueDate: "2022-01-03",
      isComplete: false,
      priority: "low",
    },
    {
      id: "4",
      title: "Task 4",
      description: "Description for Task 4",
      dueDate: "2022-01-04",
      isComplete: true,
      priority: "high",
    },
  ],
};

const taskSlice = createSlice({
  name: "task slice",
  initialState,
  reducers: {},
});

export default taskSlice.reducer;
