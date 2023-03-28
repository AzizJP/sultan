import {FC, memo} from 'react';

import {useAppSelector} from '../../hooks/redux';

import DesktopFooter from './DesktopFooter/DesktopFooter';
import PhoneFooter from './PhoneFooter/PhoneFooter';

import './Footer.scss';

const Footer: FC = memo(() => {
  const isDesktop = useAppSelector(state => state.breakpointReducer.isDesktop);

  return <footer className="footer">{isDesktop ? <DesktopFooter /> : <PhoneFooter />}</footer>;
});

export default Footer;
