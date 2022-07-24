import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import useNaviationHook from '../hooks/navigationHook';

const signup = () => {
  const initialState = {
    fname: '',
    lname: '',
    email: '',
    password: '',
  };

  const [user, setUser] = useState(initialState);
  const auth = useSelector((state) => state.app.auth);

  const { navigate } = useNaviationHook();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/users', user)
      .then((response) => {
        if (response?.status === 201) {
          setUser(initialState);
          toast.success('You have signup successfully');
        }
      })
      .catch((error) => {
        toast.error('Something went wrong', error);
      });
  };

  useEffect(() => {
    if (auth) {
      navigate('/');
    }
  }, [auth]);

  return { user, handleChange, handleSubmit };
};

export default signup;
