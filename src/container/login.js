import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useSelector } from 'react-redux';
import useNaviationHook from '../hooks/navigationHook';
import useDispatchHook from '../hooks/dispatchHook';
import { authAction } from '../redux/actions/app';
import { length } from '../utils/javascript';

const login = () => {
  const initialState = {
    email: '',
    password: '',
  };

  const [user, setUser] = useState(initialState);
  const [userList, setUserList] = useState([]);

  const auth = useSelector((state) => state.app.auth);

  const { navigate } = useNaviationHook();
  const { dispatch } = useDispatchHook();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = user;

    if (!email || !password) {
      toast.error('Email and Password are required');
      return;
    }

    axios
      .get(`http://localhost:5000/users`)
      .then((response) => {
        if (response?.status === 200) {
          setUserList(response?.data);
        }
      })
      .catch((error) => {
        toast.error('Something went wrong', error);
      });
  };

  useEffect(() => {
    if (length(userList)) {
      const authUser = userList.filter(
        (item) => item.email === user.email && item.password === user.password,
      );
      if (length(authUser)) {
        const { fname, lname, email } = authUser[0];
        toast.success('Login Successfull...');
        localStorage.setItem(
          'authUser',
          JSON.stringify({ fname, lname, email }),
        );
        dispatch(authAction(true));
        navigate('/');
      } else {
        toast.error('Invalid user or your email and password are wrong');
      }
    }
  }, [userList]);

  useEffect(() => {
    if (auth) {
      navigate('/');
    }
  }, [auth]);

  return { user, handleChange, handleSubmit };
};

export default login;
