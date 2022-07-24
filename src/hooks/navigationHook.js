import { useNavigate, useParams, useLocation } from 'react-router-dom';

const useNaviationHook = () => {
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  return { navigate, params, location };
};

export default useNaviationHook;
