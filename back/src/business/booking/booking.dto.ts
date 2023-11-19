import { IsDate, IsNumber } from 'class-validator';

export class BookHotelDto {
  @IsNumber()
  openingId: number;

  @IsNumber()
  userId: number;

  @IsDate()
  date: Date;
}
