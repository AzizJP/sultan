import {FC, memo} from 'react';

import {useAppSelector} from '../../hooks/redux';

import DesktopHeader from './DesktopHeader/DesktopHeader';
import PhoneHeader from './PhoneHeader/PhoneHeader';

import './Header.scss';

const Header: FC = memo(() => {
  const isDesktop = useAppSelector(state => state.breakpointReducer.isDesktop);

  return <header className="header">{isDesktop ? <DesktopHeader /> : <PhoneHeader />}</header>;
});

export default Header;
