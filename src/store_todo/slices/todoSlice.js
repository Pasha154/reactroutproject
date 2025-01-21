import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

export const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todos: [
            { id: v4(), label: "TypeScript" },
            { id: v4(), label: "JavaScript" },
            { id: v4(), label: "Redux-Toolkit" },
        ],
        selectedEditTask: undefined,
        inputTaskValue: "",
    },

    reducers: {
        addTask: (state) => {
            const newTask = {
                id: v4(),
                label: state.inputTaskValue,
            };
            if (state.inputTaskValue.length) {
                state.todos.push(newTask);
            }
            state.inputTaskValue = "";
        },
        deleteTask: (state, action) => {

            state.todos = state.todos.filter((task) => task.id !== action.payload);
        },
        editTask: (state, action) => {

            const index = state.todos.findIndex((task) => task.id === action.payload.id);
            if (index !== -1) {
                state.todos[index] = {
                    ...state.todos[index],
                    label: action.payload.label,
                };
            }
        },
        updateValue: (state, action) => {
            state.inputTaskValue = action.payload;
        },
    },
});

export const { addTask,
    deleteTask,
    updateValue,
    editTask } = todoSlice.actions;

export default todoSlice.reducer;
