import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import useDispatchHook from '../hooks/dispatchHook';
import { addCartAction } from '../redux/actions/app';
import { length } from '../utils/javascript';
import useNaviationHook from '../hooks/navigationHook';

const cart = () => {
  const [cartList, setCartList] = useState([]);
  const [bill, setBill] = useState(null);
  const [order, setOrder] = useState(false);
  const auth = useSelector((state) => state.app.auth);

  const { navigate } = useNaviationHook();
  const { dispatch } = useDispatchHook();

  const removeFromCart = (id, type) => {
    const initialData = localStorage.getItem('cartDetail');
    const list = JSON.parse(initialData);
    const index = list.findIndex(
      (item) => item.id === id && item.type === type,
    );

    if (index !== -1) {
      list.splice(index, 1);
      localStorage.setItem('cartDetail', JSON.stringify(list));
      setCartList(list);
      dispatch(addCartAction(length(list) || null));
    }
  };

  const handleData = () => {
    localStorage.removeItem('cartDetail');
    dispatch(addCartAction(null));
    setCartList([]);
    setBill(null);
  };

  const removeAll = () => {
    handleData();
  };

  const handleOrder = () => {
    setOrder(true);
  };

  const handleClose = () => {
    setOrder(false);
  };

  const confirmOrder = () => {
    const userDetail = JSON.parse(localStorage.getItem('authUser'));
    const data = {
      items: cartList,
      amout: bill,
      user: {
        name: `${userDetail.fname} ${userDetail.lname}`,
        email: userDetail.email,
      },
    };

    axios
      .post(`http://localhost:5000/orders`, data)
      .then((response) => {
        if (response?.status === 201) {
          handleData();
          //   setBill(null);
          setOrder(false);
          toast.success('Order successfull...');
        }
      })
      .catch((error) => {
        toast.error('Something went wrong', error);
      });
  };

  useEffect(() => {
    if (!localStorage.getItem('cartDetail')) {
      setCartList([]);
    } else {
      setCartList(JSON.parse(localStorage.getItem('cartDetail')));
    }
  }, []);

  useEffect(() => {
    let totalPrice = 0;
    if (length(cartList)) {
      cartList.forEach((item) => {
        totalPrice += item.price;
        setBill(totalPrice);
      });
    } else {
      setBill(null);
    }
  }, [cartList]);

  useEffect(() => {
    if (!auth) {
      navigate('/');
    }
  }, [auth]);

  return {
    cartList,
    removeFromCart,
    bill,
    handleOrder,
    removeAll,
    handleClose,
    order,
    confirmOrder,
  };
};

export default cart;
