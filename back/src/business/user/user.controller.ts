import { Body, Controller, Get, Post } from '@nestjs/common';
import { BookHotelDto } from './user.dto';
import { HotelService } from './user.service';

@Controller()
export class HotelController {
  constructor(private readonly hotelService: HotelService) {}

  @Get('/hotels')
  getHotels() {
    return this.hotelService.getHotels();
  }

  @Post('/hotels/booking')
  bookHotel(@Body() bookHotelDto: BookHotelDto) {
    return this.hotelService.bookHotel(bookHotelDto.id);
  }
}
