import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
import Layout from './components/Layout';
import About from './presentation/About';
import Contact from './presentation/Contact';
import Login from './presentation/Login';
import Signup from './presentation/Signup';
import Home from './presentation/Home';
import Cart from './presentation/Cart';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'react-toastify/dist/ReactToastify.css';
import Product from './presentation/Product';
import { addCartAction, authAction } from './redux/actions/app';
import useDispatchHook from './hooks/dispatchHook';
import { length } from './utils/javascript';
import PageNotFound from './components/PageNotFound';

function App() {
  const { dispatch } = useDispatchHook();

  useEffect(() => {
    const initialData = localStorage.getItem('cartDetail');
    const auth = localStorage.getItem('authUser');

    if (auth) {
      dispatch(authAction(true));
    } else {
      authAction(false);
    }

    if (!initialData) {
      dispatch(addCartAction(null));
    } else {
      dispatch(addCartAction(length(JSON.parse(initialData))));
    }
  }, []);

  return (
    <div>
      <Router>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="cart" element={<Cart />} />
            <Route path="products/:type" element={<Product />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Layout>
        <ToastContainer />
      </Router>
    </div>
  );
}

export default App;
