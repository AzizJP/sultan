import {FC, memo, useCallback, useEffect} from 'react';

import {useAppDispatch} from '../../hooks/redux';
import {setIsDesktop} from '../../store/reducers/breakpointSlice';
import {DESKTOP_BREAKPOINT} from '../App/App.constants';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';

import './App.scss';

const App: FC = memo(() => {
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
      <Main />
      <Footer />
    </div>
  );
});

export default App;
