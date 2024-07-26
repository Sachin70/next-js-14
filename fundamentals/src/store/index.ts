import { configureStore } from "@reduxjs/toolkit";

import todoReducer from "@/slices/todoSlice";

export const store = configureStore({ reducer: todoReducer });

export type RootState = ReturnType<typeof store.getState>;
