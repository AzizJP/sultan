import {FC, memo, useEffect, useCallback} from 'react';

import {useAppDispatch, useAppSelector} from '../../hooks/redux';

import {setIsDesktop} from '../../store/reducers/breakpointSlice';

import {DESKTOP_BREAKPOINT} from '../App/App.constants';

import DesktopHeader from './DesktopHeader/DesktopHeader';
import PhoneHeader from './PhoneHeader/PhoneHeader';

import './Header.scss';

const Header: FC = memo(() => {
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
  return <header className="header">{isDesktop ? <DesktopHeader /> : <PhoneHeader />}</header>;
});

export default Header;
