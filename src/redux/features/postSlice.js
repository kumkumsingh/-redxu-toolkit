import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
    try{
        return fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>res.json())
    }
    catch(err){
      return err.message
    }
})

 const postSlice = createSlice({
    name:"posts1",
    initialState:{
        posts:[],
        loading:false,
        error:null
    },
    extraReducers:{
        [getPosts.pending]: (state, action) =>{
            state.loading = true;    
        },
        [getPosts.fulfilled]: (state, action) =>{
            state.loading = false;
            state.posts = action.payload;
        },
        [getPosts.rejected]: (state, action) =>{
            state.loading = false;
            state.error = action.error.message
        }

    }
})
export default postSlice.reducer