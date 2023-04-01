export interface FilterButtonProps {
  enumKey: keyof typeof FILTER;
  active: boolean;
  className?: string;
}

export enum FILTER {
  'тело' = 'Уход за телом',
  'лицо' = 'Уход за лицом',
  'руки' = 'Уход за руками',
  'ноги' = 'Уход за ногами',
  'волосы' = 'Уход за волосами',
  'муж' = 'Для мужчин',
  'жен' = 'Для женщин',
}
