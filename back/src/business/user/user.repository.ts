import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'technical/prisma/prisma.service';

@Injectable()
export class UserRepository {
  constructor(private prisma: PrismaService) {}

  findUnique(args: Prisma.usersFindUniqueArgs) {
    return this.prisma.users.findUnique(args);
  }
}
