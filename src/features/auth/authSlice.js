import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

//obtenet al usuario del localstorage
const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

//crear un usuario
//export 

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false,
                state.isError = false,
                state.isSuccess = false,
                state.message = ''
        }
    },
    extraReducers: () => { }
})

export const { reset } = authSlice.actions
export default authSlice.reducer