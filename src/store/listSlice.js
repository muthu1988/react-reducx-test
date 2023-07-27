import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: [],
}

export const listSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
        addItems: (state, action) => {
            state.data.push(action.payload)
        },
        clearItems: (state) => {
            state.data = []
        },
    },
})

// Action creators are generated for each case reducer function
export const { addItems, clearItems } = listSlice.actions
export default listSlice.reducer