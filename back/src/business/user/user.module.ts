import { Module } from '@nestjs/common';
import { OrmService } from 'technical/orm/orm.service';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';

@Module({
  providers: [OrmService, UserService, UserRepository],
  controllers: [UserController],
  exports: [OrmService, UserService, UserRepository],
})
export class UserModule {}
