import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '.';
import type { RootState, AppDispatch } from './store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => {
    const dispatch = useDispatch();
    return bindActionCreators(actionCreators, dispatch);
}

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;