import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { OrmService } from 'technical/orm/orm.service';

@Injectable()
export class SaleDateRepository {
  constructor(private prisma: OrmService) {}

  findFirst(args: Prisma.sale_datesFindFirstArgs) {
    return this.prisma.sale_dates.findFirst(args);
  }
}
