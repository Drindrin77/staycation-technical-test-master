import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { OrmService } from 'technical/orm/orm.service';

@Injectable()
export class HotelRepository {
  constructor(private prisma: OrmService) {}

  findMany(args: Prisma.hotelsFindManyArgs) {
    return this.prisma.hotels.findMany(args);
  }

  findFirst(args: Prisma.hotelsFindFirstArgs) {
    return this.prisma.hotels.findFirst(args);
  }
}
