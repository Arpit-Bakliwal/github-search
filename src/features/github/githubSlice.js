import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null,
    repos: [],
    loading: false,
    error: null,
    searchQuery: '',
}

const githubSlice = createSlice({
    name: 'github',
    initialState,
    reducers: {
        // Action that Saga watches for
        searchUser: (state, action) => {
            state.searchQuery = action.payload
            state.loading = true
            state.error = null
        },
        // Saga dispatches these after API call
        searchUserSuccess: (state, action) => {
            state.user = action.payload.user
            state.repos = action.payload.repos
            state.loading = false
            state.error = null
        },
        searchUserFailure: (state, action) => {
            state.user = null
            state.repos = []
            state.loading = false
            state.error = action.payload
        },
        clearSearch: (state) => {
            state.user = null
            state.repos = []
            state.error = null
            state.searchQuery = ''
        }
    },
})

export const {
    searchUser,
    searchUserSuccess,
    searchUserFailure,
    clearSearch,
} = githubSlice.actions

export default githubSlice.reducer