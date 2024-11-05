import { useDispatch } from 'react-redux';
import { AppDispatch } from 'store/types';

// Use throughout the app instead of plain `useDispatch`
const useAppDispatch = () => useDispatch<AppDispatch>();

export default useAppDispatch;
