import { Controller, Get } from '@nestjs/common';
import { HotelService } from './hotel.service';

@Controller()
export class HotelController {
  constructor(private readonly hotelService: HotelService) {}

  @Get('/hotels')
  getHotels() {
    return this.hotelService.getHotels();
  }
}
