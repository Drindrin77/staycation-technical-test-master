import { Module } from '@nestjs/common';
import { PrismaService } from 'technical/prisma/prisma.service';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';

@Module({
  providers: [PrismaService, UserService, UserRepository],
  controllers: [UserController],
  exports: [PrismaService, UserService, UserRepository],
})
export class UserModule {}
