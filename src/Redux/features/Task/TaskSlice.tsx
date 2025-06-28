import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  tasks: [
    {
      id: string;
      title: string;
      description: string;
      dueDate: string;
      isComplete: boolean;
      priority: string;
    }
  ];
}

const initialState: InitialState = {
  tasks: [
    {
      id: "",
      title: "",
      description: "",
      dueDate: "",
      isComplete: false,
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
