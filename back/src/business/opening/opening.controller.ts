import { Controller, Get, Param } from '@nestjs/common';
import { OpeningService } from './opening.service';

@Controller()
export class OpeningController {
  constructor(private readonly openingService: OpeningService) {}

  @Get('/openings/:id')
  getHotelOpening(@Param('id') id: number) {
    return this.openingService.getOpeningDetails(Number(id));
  }
}
