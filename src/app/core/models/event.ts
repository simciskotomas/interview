import { AddressDto } from './address';

export interface EventDto {
  title: string;
  address?: AddressDto;
  price?: number;
  description?: string;
  date?: string;
}
