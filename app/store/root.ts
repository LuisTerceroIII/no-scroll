import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { NoScrollGalerySlice } from "../features/galery/store/no-scroll-galery-slice/no-scroll-galery-slice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const rootReducer = combineReducers({
    noScrollGalery: NoScrollGalerySlice.reducer
})

export const store = configureStore({
    reducer: rootReducer
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;