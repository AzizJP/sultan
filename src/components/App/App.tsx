import {FC, memo, useCallback, useEffect} from 'react';
import {Route, Routes} from 'react-router-dom';

import {useAppDispatch, useAppSelector} from '../../hooks/redux';

import {setIsDesktop} from '../../store/reducers/breakpointSlice';
import {DESKTOP_BREAKPOINT} from '../App/App.constants';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';

import CardPage from '../CardPage/CardPage';
import CatalogPage from '../CatalogPage/CatalogPage';
import ComeBack from '../ComeBack/ComeBack';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import OrderPage from '../OrderPage/OrderPage';

import './App.scss';

const App: FC = memo(() => {
  const card = useAppSelector(state => state.cardReducer.card);
  const isDesktop = useAppSelector(state => state.breakpointReducer.isDesktop);
  const dispatch = useAppDispatch();

  const handleResize = useCallback(() => {
    if (window.innerWidth > DESKTOP_BREAKPOINT) {
      dispatch(setIsDesktop(true));
    } else {
      dispatch(setIsDesktop(false));
    }
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
      {isDesktop ? <Breadcrumbs cardName={card.name} /> : <ComeBack />}
      <Routes>
        <Route path="/" element={<CatalogPage />} />
        <Route path="order" element={<OrderPage />} />
        <Route path="catalog/:cardId" element={<CardPage />} />
      </Routes>
      <Footer />
    </div>
  );
});

export default App;
