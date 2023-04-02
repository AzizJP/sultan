import {FC, FormEvent, memo, useCallback, useState} from 'react';

import {CardTypes} from '../CatalogPage/Cards/Card/Card.types';

import AdminPageCard from './AdminPageCard/AdminPageCard';
import AdminPageForm from './AdminPageForm/AdminPageForm';

import './AdminPage.scss';

const AdminPage: FC = memo(() => {
  const [card, setCard] = useState({
    url: '',
    name: '',
    dimensionType: '',
    dimension: '',
    barcode: '',
    manufacturer: '',
    brand: '',
    description: '',
    price: 0,
    careType: [],
  });
  const [cards, setCards] = useState<Array<CardTypes>>(JSON.parse(localStorage.getItem('cards')) || []);

  const handleCardChange = useCallback((newCard: CardTypes) => {
    setCard(newCard);
  }, []);

  const handleCardsChange = useCallback((newArr: Array<CardTypes>) => {
    setCards(newArr);
  }, []);

  const handleSubmit = useCallback(
    (evt: FormEvent<HTMLFormElement>): void => {
      evt.preventDefault();
      const copyCards = [...cards, card];
      setCards(copyCards);
      localStorage.setItem('cards', JSON.stringify(copyCards));
    },
    [card, cards],
  );

  return (
    <section className="admin">
      <div className="admin__form">
        <h4 className="admin__title">Добавление карточки</h4>
        <AdminPageForm
          handleCardChange={handleCardChange}
          card={card}
          handleSubmit={handleSubmit}
          title="Добавить товар"
        />
      </div>
      <div className="admin__cards">
        {cards.map(item => (
          <AdminPageCard key={item.barcode} card={item} cards={cards} handleCardsChange={handleCardsChange} />
        ))}
      </div>
    </section>
  );
});

export default AdminPage;
