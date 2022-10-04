import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Tag = string;

const initialState = {
  tags: [] as Tag[],
};

export const slice = createSlice({
  name: "slice",
  initialState,
  reducers: {
    setTags: (store, action: PayloadAction<Tag[]>) => {
      store.tags = action.payload;
    },
  },
});
