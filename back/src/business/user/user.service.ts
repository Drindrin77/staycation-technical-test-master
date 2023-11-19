import { Injectable } from '@nestjs/common';
import { HotelRepository } from './user.repository';

@Injectable()
export class HotelService {
  constructor(private hotelRepository: HotelRepository) {}

  getHotels() {
    return this.hotelRepository.findMany({});
  }

  bookHotel(id: string) {
    console.log(id);

    //TODO: verifier la disponibilité
  }
}
