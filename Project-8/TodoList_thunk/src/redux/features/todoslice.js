import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:3004/todos";

export const fetchTodos = createAsyncThunk("fetchTodos", async () => {
  const res = await axios.get(API_URL);
  return res.data;
});

export const addTodo = createAsyncThunk("addTodo", async (title) => {
  const res = await axios.post(API_URL, { title, completed: false });
  return res.data;
});

export const updateTodo = createAsyncThunk("updateTodo", async (todo) => {
  const res = await axios.put(`${API_URL}/${todo.id}`, todo);
  return res.data;
});

export const deleteTodo = createAsyncThunk("deleteTodo", async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});

const todoslice = createSlice({
  name: "todos",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        const index = state.items.findIndex((t) => t.id === action.payload.id);
        state.items[index] = action.payload;
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.items = state.items.filter((t) => t.id !== action.payload);
      });
  },
});

export default todoslice.reducer;
