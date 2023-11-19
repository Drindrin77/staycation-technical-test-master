import { IsUUID } from 'class-validator';

export class BookHotelDto {
  @IsUUID()
  id: string;
}
