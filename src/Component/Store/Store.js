import {configureStore} from '@reduxjs/toolkit';
import initialState from './Slice'

export const Store = configureStore({

    reducer : { // link initial state from slice.js
        data : initialState
    }
})