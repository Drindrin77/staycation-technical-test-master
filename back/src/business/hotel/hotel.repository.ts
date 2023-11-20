import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'technical/prisma/prisma.service';

@Injectable()
export class HotelRepository {
  constructor(private prisma: PrismaService) {}

  findMany(args: Prisma.hotelsFindManyArgs) {
    return this.prisma.hotels.findMany(args);
  }

  findFirst(args: Prisma.hotelsFindFirstArgs) {
    return this.prisma.hotels.findFirst(args);
  }

  test(id: number) {
    return this.prisma.openings.findFirst({
      where: {
        id,
      },
      include: {
        rooms: {
          include: {
            hotels: true,
          },
        },
        sale_dates: true,
      },
    });
  }
}
