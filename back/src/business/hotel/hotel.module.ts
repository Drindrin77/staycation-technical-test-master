import { Module } from '@nestjs/common';
import { PrismaService } from 'technical/prisma/prisma.service';
import { HotelController } from './hotel.controller';
import { HotelRepository } from './hotel.repository';
import { HotelService } from './hotel.service';

@Module({
  providers: [PrismaService, HotelService, HotelRepository],
  controllers: [HotelController],
  exports: [HotelService, HotelRepository],
})
export class HotelModule {}
