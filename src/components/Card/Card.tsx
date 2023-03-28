import {FC, memo, useCallback} from 'react';
import {Link} from 'react-router-dom';

import {useAppDispatch} from '../../hooks/redux';

import {setCardName} from '../../store/reducers/cardSlice';

import './Card.scss';
import {CardProps} from './Card.types';

const Card: FC<CardProps> = memo(({card}) => {
  const dispatch = useAppDispatch();

  const handleCardClick = useCallback(() => {
    dispatch(setCardName(card.name));
  }, [card.name, dispatch]);

  return (
    <div className="card">
      <Link to={`/catalog/${card.barcode}`} onClick={handleCardClick}>
        {card.name}
      </Link>
      <p>{card.brand}</p>
    </div>
  );
});

export default Card;
