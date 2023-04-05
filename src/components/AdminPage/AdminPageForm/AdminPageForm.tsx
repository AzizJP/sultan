import {ChangeEvent, FC, memo, useCallback, useState} from 'react';

import Button from '../../Button/Button';
import {FILTER} from '../../CatalogPage/SortFilterSection/FilterButton/FilterButton.types';

import {AdminPageFormProps, DimensionType} from './AdminPageForm.types';

import './AdminPageForm.scss';

const AdminPageForm: FC<AdminPageFormProps> = memo(({card, title, handleCardChange, handleSubmit}) => {
  const [checkboxType, setCheckboxType] = useState([]);

  const handleCardUrlChange = useCallback(
    (evt: ChangeEvent<HTMLInputElement>) => {
      handleCardChange({
        ...card,
        url: evt.target.value,
      });
    },
    [card, handleCardChange],
  );

  const handleCardNameChange = useCallback(
    (evt: ChangeEvent<HTMLInputElement>) => {
      handleCardChange({
        ...card,
        name: evt.target.value,
      });
    },
    [card, handleCardChange],
  );

  const handleCardDimensionTypeChange = useCallback(
    (key: string) => {
      handleCardChange({
        ...card,
        dimensionType: key,
      });
    },
    [card, handleCardChange],
  );

  const handleCardDimensionChange = useCallback(
    (evt: ChangeEvent<HTMLInputElement>) => {
      handleCardChange({
        ...card,
        dimension: evt.target.value,
      });
    },
    [card, handleCardChange],
  );

  const handleCardBarcodeChange = useCallback(
    (evt: ChangeEvent<HTMLInputElement>) => {
      handleCardChange({
        ...card,
        barcode: evt.target.value,
      });
    },
    [card, handleCardChange],
  );

  const handleCardManufacturerChange = useCallback(
    (evt: ChangeEvent<HTMLInputElement>) => {
      handleCardChange({
        ...card,
        manufacturer: evt.target.value,
      });
    },
    [card, handleCardChange],
  );

  const handleCardBrandChange = useCallback(
    (evt: ChangeEvent<HTMLInputElement>) => {
      handleCardChange({
        ...card,
        brand: evt.target.value,
      });
    },
    [card, handleCardChange],
  );

  const handleCardDescriptionChange = useCallback(
    (evt: ChangeEvent<HTMLInputElement>) => {
      handleCardChange({
        ...card,
        description: evt.target.value,
      });
    },
    [card, handleCardChange],
  );

  const handleCardPriceChange = useCallback(
    (evt: ChangeEvent<HTMLInputElement>) => {
      if (isNaN(parseInt(evt.target.value))) return;
      handleCardChange({
        ...card,
        price: parseInt(evt.target.value),
      });
    },
    [card, handleCardChange],
  );

  const handleCardCareTypeChange = useCallback(
    (key: string) => {
      const arr = [...checkboxType, key];
      setCheckboxType(arr);
      handleCardChange({
        ...card,
        careType: arr,
      });
    },
    [card, handleCardChange, checkboxType],
  );

  return (
    <form className="admin-form" onSubmit={handleSubmit}>
      <label className="admin-form__label" htmlFor="url">
        Url картинки
      </label>
      <input
        type="text"
        className="admin-form__input"
        required
        value={card.url}
        onChange={handleCardUrlChange}
        name="url"
        id="url"
      />
      <label className="admin-form__label" htmlFor="name">
        Название товара
      </label>
      <input
        type="text"
        className="admin-form__input"
        required
        value={card.name}
        onChange={handleCardNameChange}
        name="name"
        id="name"
      />
      <span className="admin-form__label">Тип измерения</span>
      {Object.keys(DimensionType).map((key: keyof typeof DimensionType) => (
        <div className="admin-form__radio-wrapper" key={key}>
          <input
            type="radio"
            className="admin-form__radio"
            value={card.dimensionType}
            onChange={() => handleCardDimensionTypeChange(key)}
            name="dimension-type"
            id={key}
          />
          <label className="admin-form__radio-label" htmlFor={key}>
            {DimensionType[key]}
          </label>
        </div>
      ))}
      <label className="admin-form__label" htmlFor="dimension">
        Вес / Объем / Количество
      </label>
      <input
        type="text"
        className="admin-form__input"
        required
        value={card.dimension}
        onChange={handleCardDimensionChange}
        name="dimension"
        id="dimension"
      />
      <label className="admin-form__label" htmlFor="barcode">
        Штрихкод
      </label>
      <input
        type="text"
        className="admin-form__input"
        required
        value={card.barcode}
        onChange={handleCardBarcodeChange}
        name="barcode"
        id="barcode"
      />
      <label className="admin-form__label" htmlFor="manufacturer">
        Производитель
      </label>
      <input
        type="text"
        className="admin-form__input"
        required
        value={card.manufacturer}
        onChange={handleCardManufacturerChange}
        name="manufacturer"
        id="manufacturer"
      />
      <label className="admin-form__label" htmlFor="brand">
        Бренд
      </label>
      <input
        type="text"
        className="admin-form__input"
        required
        value={card.brand}
        onChange={handleCardBrandChange}
        name="brand"
        id="brand"
      />
      <label className="admin-form__label" htmlFor="description">
        Описание
      </label>
      <input
        type="text"
        className="admin-form__input"
        required
        value={card.description}
        onChange={handleCardDescriptionChange}
        name="description"
        id="description"
      />
      <label className="admin-form__label" htmlFor="price">
        Цена
      </label>
      <input
        type="text"
        min="0"
        className="admin-form__input"
        required
        value={card.price}
        onChange={handleCardPriceChange}
        name="price"
        id="price"
      />
      <label className="admin-form__label" htmlFor="careType">
        Тип фильтра
      </label>
      {Object.keys(FILTER).map((key: keyof typeof FILTER) => (
        <div className="admin-form__checkbox-wrapper" key={key}>
          <input
            type="checkbox"
            className="admin-form__checkbox"
            value={card.careType}
            onChange={() => handleCardCareTypeChange(key)}
            name={key}
            id={key}
          />
          <label className="admin-form__checkbox-label" htmlFor={key}>
            {FILTER[key]}
          </label>
        </div>
      ))}
      <Button type="submit" title={title} buttonClassName="admin-form__button" />
    </form>
  );
});

export default AdminPageForm;
