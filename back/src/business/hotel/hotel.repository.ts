import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'technical/prisma/prisma.service';

@Injectable()
export class HotelRepository {
  constructor(private prisma: PrismaService) {}

  findMany(args: Prisma.hotelsFindManyArgs) {
    return this.prisma.hotels.findMany(args);
  }
}
