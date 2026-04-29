import { all } from 'redux-saga/effects'
import { githubWatcherSaga } from '../features/github/githubSaga'

// Combines all watcher sagas
// all() runs them in parallel — each saga watches independently
export default function* rootSaga() {
    yield all([
        githubWatcherSaga(),
        // add more sagas here as app grows
    ])
}