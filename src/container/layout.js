import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import useDispatchHook from '../hooks/dispatchHook';
import useNaviationHook from '../hooks/navigationHook';
import { authAction, handleSearchAction } from '../redux/actions/app';
import { firstLetterCap, length } from '../utils/javascript';

const layout = () => {
  const [open, setOpen] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [searchList, setSearchList] = useState([]);
  const list = useSelector((state) => state.app.dataList);
  const totalCart = useSelector((state) => state.app.totalData);
  const auth = useSelector((state) => state.app.auth);

  const { navigate } = useNaviationHook();
  const { dispatch } = useDispatchHook();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleSearch = (e, value) => {
    dispatch(handleSearchAction(value));
  };

  const logout = () => {
    dispatch(authAction(false));
    localStorage.removeItem('authUser');
  };

  useEffect(() => {
    setIsAuth(auth);
  }, [auth]);

  useEffect(() => {
    if (length(list)) {
      const ls = [];
      list.forEach((element, index) => {
        ls.push({ id: index + 1, title: firstLetterCap(element.key) });
      });
      setSearchList(ls || []);
    }
  }, [list]);

  return {
    open,
    isAuth,
    navigate,
    handleDrawerOpen,
    handleDrawerClose,
    searchList,
    handleSearch,
    totalCart,
    logout,
  };
};

export default layout;
