import {FC, FormEvent, memo, useCallback, useState} from 'react';
import {Link} from 'react-router-dom';

import {ReactComponent as DeleteIcon} from '../../../images/delete.svg';

import Button from '../../Button/Button';
import {CardTypes} from '../../CatalogPage/Cards/Card/Card.types';
import AdminPageForm from '../AdminPageForm/AdminPageForm';

import {AdminPageCardProps} from './AdminPageCard.types';

import './AdminPageCard.scss';
const AdminPageCard: FC<AdminPageCardProps> = memo(({card, cards, handleCardsChange}) => {
  const [editedCard, setEditedCard] = useState({...card});
  const [isEdit, setIsEdit] = useState(false);

  const handleCardChange = useCallback((newCard: CardTypes) => {
    setEditedCard(newCard);
  }, []);

  const handleDeleteCard = useCallback(() => {
    const newArr = [...cards].filter(i => i.barcode !== card.barcode);
    handleCardsChange(newArr);
    localStorage.setItem('cards', JSON.stringify(newArr));
    if (newArr.length === 0) localStorage.removeItem('cards');
  }, [card.barcode, cards, handleCardsChange]);

  const toggleEditCard = useCallback(() => {
    setIsEdit(!isEdit);
  }, [isEdit]);

  const handleSubmit = useCallback(
    (evt: FormEvent<HTMLFormElement>): void => {
      evt.preventDefault();
      setIsEdit(false);
      const newArr = [...cards].filter(i => i.barcode !== card.barcode);
      const copyCards = [...newArr, editedCard];
      handleCardsChange(copyCards);
      localStorage.setItem('cards', JSON.stringify(copyCards));
    },
    [card.barcode, cards, editedCard, handleCardsChange],
  );

  return (
    <article className="admin-card">
      <img src={card.url} alt="Изображение товара" className="admin-card__image" />
      <Link to={`/catalog/${card.barcode}`} className="admin-card__link">
        <span className="admin-card__link-name">{card.name}</span>
      </Link>
      <p className="admin-card__text">
        Штрихкод: <span className="admin-card__text-bold">{card.barcode}</span>
      </p>
      <Button
        title="Удалить"
        buttonClassName="admin-card__button"
        titleClassName="admin-card__button-title"
        onClick={handleDeleteCard}
      >
        <DeleteIcon />
      </Button>
      <Button
        title={`${isEdit ? 'Отменить редактирование' : 'Редактировать'}`}
        buttonClassName="admin-card__button"
        titleClassName="admin-card__button-title"
        onClick={toggleEditCard}
      />
      {isEdit && (
        <AdminPageForm
          handleCardChange={handleCardChange}
          card={editedCard}
          handleSubmit={handleSubmit}
          title="Обновить данные"
        />
      )}
    </article>
  );
});

export default AdminPageCard;
