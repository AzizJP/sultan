import {FC, memo} from 'react';
import {Link} from 'react-router-dom';

import {ReactComponent as ArrowIcon} from '../../images/arrow-back.svg';

import './ComeBack.scss';

const ComeBack: FC = memo(() => {
  return (
    <Link to="/" className="come-back">
      <span className="come-back__icon">
        <ArrowIcon />
      </span>
      <span className="come-back__text">НАЗАД</span>
    </Link>
  );
});

export default ComeBack;
