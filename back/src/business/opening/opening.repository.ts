import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'technical/prisma/prisma.service';

@Injectable()
export class OpeningRepository {
  constructor(private prisma: PrismaService) {}

  findFirst(args: Prisma.openingsFindFirstArgs) {
    return this.prisma.openings.findFirst(args);
  }
}
