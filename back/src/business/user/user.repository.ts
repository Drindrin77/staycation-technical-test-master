import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { OrmService } from 'technical/orm/orm.service';

@Injectable()
export class UserRepository {
  constructor(private prisma: OrmService) {}

  findUnique(args: Prisma.usersFindUniqueArgs) {
    return this.prisma.users.findUnique(args);
  }
}
