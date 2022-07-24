import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import useDispatchHook from '../hooks/dispatchHook';
import useNaviationHook from '../hooks/navigationHook';
import { addCartAction } from '../redux/actions/app';
import { length } from '../utils/javascript';

const product = () => {
  const { params, navigate } = useNaviationHook();
  const { dispatch } = useDispatchHook();
  const { type } = params;

  const [productList, setProductList] = useState([]);
  const [cartData, setCartData] = useState([]);
  const auth = useSelector((state) => state.app.auth);

  const addToCart = (id, url, description, price) => {
    const initialData = localStorage.getItem('cartDetail');
    if (!initialData) {
      const details = [{ id, type, url, description, price }];
      localStorage.setItem('cartDetail', JSON.stringify(details));
      dispatch(addCartAction(1));
    } else {
      const clone = JSON.parse(initialData);
      clone.push({ id, type, url, description, price });
      localStorage.setItem('cartDetail', JSON.stringify(clone));
      dispatch(
        addCartAction(length(JSON.parse(localStorage.getItem('cartDetail')))),
      );
    }
  };

  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:5000/api-${type}`)
  //     .then((response) => {
  //       if (response?.status === 200) {
  //         setProductList(response?.data);
  //       }
  //     })
  //     .catch((error) => {
  //       toast.error('Something went wrong', error);
  //     });

  //   const initialData = localStorage.getItem('cartDetail');

  //   if (!initialData) {
  //     setCartData([]);
  //   } else {
  //     setCartData(JSON.parse(initialData));
  //   }
  // }, []);

  useEffect(() => {
    if (type) {
      axios
        .get(`http://localhost:5000/api-${type}`)
        .then((response) => {
          if (response?.status === 200) {
            setProductList(response?.data);
          }
        })
        .catch((error) => {
          toast.error('Something went wrong', error);
        });

      const initialData = localStorage.getItem('cartDetail');

      if (!initialData) {
        setCartData([]);
      } else {
        setCartData(JSON.parse(initialData));
      }
    }
  }, [type]);

  useEffect(() => {
    if (!auth) {
      navigate('/');
    }
  }, [auth]);

  return { type, productList, addToCart, cartData };
};

export default product;
