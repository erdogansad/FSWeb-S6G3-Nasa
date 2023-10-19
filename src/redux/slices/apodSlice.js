import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let initialState = {
  single: {},
  list: [],
  isLoading: false,
  error: "",
};

export const fetchApod = createAsyncThunk("apod/fetchApod", async (dates, { rejectWithValue }) => {
  try {
    if (dates) {
      if (dates.start_date && dates.end_date) {
        const resp = await axios.get(
          `${process.env.REACT_APP_API_URL}?api_key=${process.env.REACT_APP_API_KEY}&start_date=${dates.start_date}&end_date=${dates.end_date}`
        );
        return resp.data;
      } else {
        const resp = await axios.get(`${process.env.REACT_APP_API_URL}?api_key=${process.env.REACT_APP_API_KEY}&date=${dates}`);
        return resp.data;
      }
    } else {
      const localData = localStorage.getItem("apod") ? JSON.parse(localStorage.getItem("apod")) : null;
      if (localData && new Date(localData.date).setHours(0, 0, 0, 0) === new Date().setHours(0, 0, 0, 0)) {
        return localData;
      } else {
        const resp = await axios.get(`${process.env.REACT_APP_API_URL}?api_key=${process.env.REACT_APP_API_KEY}`);
        localStorage.setItem("apod", JSON.stringify(resp.data));
        return resp.data;
      }
    }
  } catch (error) {
    return rejectWithValue(error.response.data.msg);
  }
});

const apodSlice = createSlice({
  name: "apod",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchApod.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchApod.fulfilled, (state, action) => {
      state.isLoading = false;
      if (Array.isArray(action.payload)) {
        state.list = action.payload;
      } else {
        state.single = action.payload;
      }
      state.error = "";
    });
    builder.addCase(fetchApod.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default apodSlice.reducer;
