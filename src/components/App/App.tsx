import {FC, memo} from 'react';

import Header from '../Header/Header';

import './App.scss';

const App: FC = memo(() => {
  return (
    <div className="page">
      <Header />
    </div>
  );
});

export default App;
