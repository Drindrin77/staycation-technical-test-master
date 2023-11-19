import { Injectable } from '@nestjs/common';
import { HotelRepository } from './hotel.repository';

@Injectable()
export class HotelService {
  constructor(private hotelRepository: HotelRepository) {}

  getHotels() {
    return this.hotelRepository.findMany({});
  }

  bookHotel(id: string) {
    //TODO: verifier la disponibilité
  }
}
