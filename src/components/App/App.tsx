import {FC, memo, useCallback, useEffect} from 'react';
import {Route, Routes} from 'react-router-dom';

import {useAppDispatch, useAppSelector} from '../../hooks/redux';

import {setIsDesktop, setIsLaptop} from '../../store/reducers/breakpointSlice';

import AdminPage from '../AdminPage/AdminPage';
import {DESKTOP_BREAKPOINT, LAPTOP_BREAKPOINT} from '../App/App.constants';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import CardPage from '../CardPage/CardPage';
import CatalogPage from '../CatalogPage/CatalogPage';
import ComeBack from '../ComeBack/ComeBack';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import OrderPage from '../OrderPage/OrderPage';

import './App.scss';

const App: FC = memo(() => {
  const dispatch = useAppDispatch();
  const isDesktop = useAppSelector(state => state.breakpoint.isDesktop);

  const handleResize = useCallback(() => {
    dispatch(setIsDesktop(window.innerWidth > DESKTOP_BREAKPOINT));
    dispatch(setIsLaptop(window.innerWidth > LAPTOP_BREAKPOINT));
  }, [dispatch]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  return (
    <div className="page">
      <Header />
      {isDesktop ? <Breadcrumbs /> : <ComeBack />}
      <Routes>
        <Route path="/" element={<CatalogPage />} />
        <Route path="order" element={<OrderPage />} />
        <Route path="catalog/:cardBarcode" element={<CardPage />} />
        <Route path="admin" element={<AdminPage />} />
      </Routes>
      <Footer />
    </div>
  );
});

export default App;
