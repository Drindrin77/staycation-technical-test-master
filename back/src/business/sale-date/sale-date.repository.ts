import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'technical/prisma/prisma.service';

@Injectable()
export class SaleDateRepository {
  constructor(private prisma: PrismaService) {}

  findFirst(args: Prisma.sale_datesFindFirstArgs) {
    return this.prisma.sale_dates.findFirst(args);
  }
}
