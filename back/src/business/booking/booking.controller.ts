import { Body, Controller, Post } from '@nestjs/common';
import { BookHotelDto } from './booking.dto';
import { BookingService } from './booking.service';

@Controller()
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Post('/booking')
  bookRoom(@Body() bookHotelDto: BookHotelDto) {
    return this.bookingService.bookRoom(bookHotelDto);
  }
}
