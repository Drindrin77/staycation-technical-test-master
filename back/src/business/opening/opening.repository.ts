import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { OrmService } from 'technical/orm/orm.service';

@Injectable()
export class OpeningRepository {
  constructor(private prisma: OrmService) {}

  findFirst(args: Prisma.openingsFindFirstArgs) {
    return this.prisma.openings.findFirst(args);
  }
}
