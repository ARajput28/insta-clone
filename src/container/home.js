import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import useDispatchHook from '../hooks/dispatchHook';
import { handleDataAction } from '../redux/actions/app';
import useNaviationHook from '../hooks/navigationHook';
import { length } from '../utils/javascript';

const home = () => {
  const list = [
    'ice-cream',
    'furniture',
    'electronics',
    'vagitables',
    'gift',
    'medicine',
    'clothes',
    'flowers',
    'snacks',
    'dry-fruits',
  ];

  const [types, setTpes] = useState([
    { gift: '', wine: '', flowers: '', coffe: '', hardware: '', shoes: '' },
  ]);

  const [expanded, setExpanded] = useState(false);
  const [products, setProducts] = useState([]);
  const search = useSelector((state) => state.app.search);
  const auth = useSelector((state) => state.app.auth);

  const { dispatch } = useDispatchHook();
  const { navigate } = useNaviationHook();

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleRoute = (url) => {
    if (auth) {
      navigate(`/products/${url}`);
    } else {
      navigate(`/login`);
    }
  };

  const getAllData = async () => {
    const delFetch = list.map((item) => {
      return axios.get(`http://localhost:5000/${item}`);
    });

    const res = await Promise.all(delFetch);

    if (res && length(res)) {
      const listData = [
        { key: 'ice-cream', value: [] },
        { key: 'furniture', value: [] },
        { key: 'electronics', value: [] },
        { key: 'vagitables', value: [] },
        { key: 'gift', value: [] },
        { key: 'medicine', value: [] },
        { key: 'clothes', value: [] },
        { key: 'flowers', value: [] },
        { key: 'snacks', value: [] },
        { key: 'dry-fruits', value: [] },
      ];

      res.forEach((item, index) => {
        if (item?.status === 200) {
          listData[index].value.push(...[item?.data]);
        } else {
          toast.error('Somethin went wrong...');
        }
      });
      setProducts(listData || []);
      dispatch(handleDataAction(listData || []));
    } else {
      toast.error('Somethin went wrong...');
    }
  };

  useEffect(() => {
    getAllData();
    setTpes({ ...types });
  }, []);

  return { handleChange, expanded, products, search, handleRoute };
};

export default home;
