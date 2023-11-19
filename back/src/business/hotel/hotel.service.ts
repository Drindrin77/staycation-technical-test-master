import { Injectable } from '@nestjs/common';
import { HotelRepository } from './hotel.repository';

@Injectable()
export class HotelService {
  constructor(private hotelRepository: HotelRepository) {}

  getHotels(date?: Date) {
    return this.hotelRepository.findMany({
      include: {
        Room: {
          include: {
            Opening: {
              where: {
                stock: {
                  gt: 0,
                },
                saleDate: {
                  bookableDays: {
                    has: date,
                  },
                },
              },
              orderBy: {
                discountPrice: 'asc',
              },
              take: 1,
            },
          },
        },
      },
    });
  }
}
