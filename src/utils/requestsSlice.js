import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
    name:"requests",
    initialState:null,
    reducers:{
        addRequests : (state,action)=>{
            return action.payload;
        },
        filterRequests : (state,action)=>{
            const newArray = state.filter((request)=>request.connectionRequestId!=action.payload);
            return newArray;
        }
    }
})

export const {addRequests,filterRequests} = requestSlice.actions;
export default requestSlice.reducer;