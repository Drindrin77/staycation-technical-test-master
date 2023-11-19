import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'technical/prisma/prisma.service';

@Injectable()
export class SaleDateRepository {
  constructor(private prisma: PrismaService) {}

  findFirst(args: Prisma.SaleDateFindFirstArgs) {
    return this.prisma.saleDate.findFirst(args);
  }
}
