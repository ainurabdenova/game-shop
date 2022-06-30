import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import basketReducer from './slice/basket'
import gamesReducer from './slice/games';
import userReducer from "./slice/userSlice"
import openCloseReducer from './slice/openClose';
import searchReducer from "./slice/searchFilter"

const rootReducer = combineReducers({
    basket: basketReducer,
    games: gamesReducer,
    user: userReducer,
    openClose: openCloseReducer,
    search: searchReducer,
})

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export const persistor = persistStore(store)
export { store }