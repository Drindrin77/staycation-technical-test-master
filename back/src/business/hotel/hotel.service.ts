import { Injectable } from '@nestjs/common';
import { HotelRepository } from './hotel.repository';

@Injectable()
export class HotelService {
  constructor(private hotelRepository: HotelRepository) {}

  getHotels() {
    const currentDate = new Date();
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
                  endDate: {
                    lte: currentDate,
                  },
                  startDate: {
                    gte: currentDate,
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
