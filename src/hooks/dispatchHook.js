import { useDispatch } from 'react-redux';

const useDispatchHook = () => {
  const dispatch = useDispatch();
  return { dispatch };
};

export default useDispatchHook;
