import { Injectable } from '@nestjs/common';
import { HotelRepository } from './hotel.repository';

@Injectable()
export class HotelService {
  constructor(private hotelRepository: HotelRepository) {}

  async getHotelByOpeningId(openingId: number) {
    // return this.hotelRepository.test(openingId);
    return this.hotelRepository.findFirst({
      where: {
        rooms: {
          some: {
            openings: {
              some: {
                id: openingId,
              },
            },
          },
        },
      },
      include: {
        reviews: {
          select: {
            score: true,
          },
        },
        rooms: {
          include: {
            openings: {
              include: {
                sale_dates: true,
              },
            },
          },
        },
      },
    });
  }

  async getHotels() {
    const currentDate = new Date('2023-12-06');
    const hotelRepo: any[] = await this.hotelRepository.findMany({
      include: {
        reviews: {
          select: {
            score: true,
          },
        },
        rooms: {
          include: {
            openings: {
              where: {
                sale_dates: {
                  start_date: {
                    lte: currentDate,
                  },
                  end_date: {
                    gte: currentDate,
                  },
                },
                stock: {
                  gt: 0,
                },
              },
              orderBy: {
                discount_price: 'desc',
              },
              take: 1,
            },
          },
        },
      },
    });

    return hotelRepo.reduce((prev, cur) => {
      const filteredRooms = cur.rooms
        .filter((room: any) => !!room.openings.length)
        .sort((room1: any, room2: any) => {
          return (
            room1.openings[0].discount_price - room2.openings[0].discount_price
          );
        });

      if (!!filteredRooms.length) {
        const formattedRoom = {
          ...cur,
          room: {
            ...filteredRooms[0],
            opening: filteredRooms[0].openings[0],
          },
        };
        delete formattedRoom.rooms;
        delete formattedRoom.room.openings;
        prev.push(formattedRoom);
      }
      return prev;
    }, []);
  }
}
