export interface CardTypes {
  url: string;
  name: string;
  dimensionType: string;
  dimension: string;
  barcode: string;
  manufacturer: string;
  brand: string;
  description: string;
  price: number;
  careType: Array<string>;
}

export interface CardProps {
  card: CardTypes;
}
