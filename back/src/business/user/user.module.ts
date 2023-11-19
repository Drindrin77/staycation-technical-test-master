import { Module } from '@nestjs/common';
import { PrismaService } from 'technical/prisma/prisma.service';
import { HotelController } from './user.controller';
import { HotelRepository } from './user.repository';
import { HotelService } from './user.service';

@Module({
  providers: [PrismaService, HotelService, HotelRepository],
  controllers: [HotelController],
  exports: [HotelService, HotelRepository],
})
export class HotelModule {}
