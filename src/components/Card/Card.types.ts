export interface Card {
  url: string;
  name: string;
  dimensionType: string;
  dimension: string;
  barcode: string;
  manufacturer: string;
  brand: string;
  description: string;
  careType: string;
}

export interface CardProps {
  card: Card;
}
