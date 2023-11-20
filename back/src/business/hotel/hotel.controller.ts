import { Controller, Get, Param } from '@nestjs/common';
import { HotelService } from './hotel.service';

@Controller()
export class HotelController {
  constructor(private readonly hotelService: HotelService) {}

  @Get('/hotels')
  getHotels() {
    return this.hotelService.getHotels();
  }

  @Get('/hotels/openings/:id')
  async getHotelOpening(@Param('id') id: number) {
    console.log(await this.hotelService.getHotelByOpeningId(Number(id)));
  }
}
