import { call, put, takeLatest, debounce, all } from 'redux-saga/effects'
import { fetchUser, fetchRepos } from './githubAPI'
import { searchUser, searchUserSuccess, searchUserFailure } from './githubSlice'

//  Worker Saga 
// Does the actual work — called by watcher saga
// Think of this as the thunk function equivalent
function* handleSearchUser(action) {
    try {
        const username = action.payload

        // call() — pauses generator, waits for Promise to resolve
        // Runs user fetch and repo fetch in PARALLEL using all()
        const [user, repos] = yield all([
            call(fetchUser, username),
            call(fetchRepos, username),
        ])

        // put() — dispatches an action to Redux store
        yield put(searchUserSuccess({ user, repos }))

    } catch (error) {
        // GitHub returns 404 for unknown users
        const message = error.response?.status === 404
            ? `User "${action.payload}" not found`
            : 'Failed to fetch user data'

        yield put(searchUserFailure(message))
    }
}

//  Wathcher Saga
// Watches for actions — calls worker saga when action is dispatched
// debounce() — waits 500ms after last action before calling worker
// If new action comes within 500ms — cancels previous, starts fresh
export function* githubWatcherSaga() {
    yield debounce(500, searchUser.type, handleSearchUser)
}