
import { RootType } from '../redux/reducers/rootReducer';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

export const useSelectorTyped: TypedUseSelectorHook<RootType> = useSelector
