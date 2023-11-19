import { Injectable } from '@nestjs/common';
import { BookHotelDto } from './booking.dto';
import { BookingRepository } from './booking.repository';

@Injectable()
export class BookingService {
  constructor(private bookingRepository: BookingRepository) {}

  bookRoom(bookHotelDto: BookHotelDto) {
    return this.bookingRepository.bookRoom(bookHotelDto);
  }
}
