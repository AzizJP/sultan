import {FC, memo} from 'react';
import {Link} from 'react-router-dom';

import './Crumb.scss';

const Crumb: FC = memo(() => {
  return (
    <nav className="crumb">
      Crumb
      <Link to="/">Catalog</Link>
    </nav>
  );
});

export default Crumb;
