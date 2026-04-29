import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import githubReducer from '../features/github/githubSlice'
import rootSaga from './rootSaga'

// Create saga middleware
const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: {
        github: githubReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            // Saga uses non-serializable values internally
            // disable check to avoid warnings
            thunk: false,  // disable thunk — we use saga
            serializableCheck: false,
        }).concat(sagaMiddleware),
})

// Run root saga AFTER store is created
// Must be called after configureStore
sagaMiddleware.run(rootSaga)

export default store