import { Module } from '@nestjs/common';
import { HotelModule } from 'business/hotel/hotel.module';
import { PrismaService } from 'technical/prisma/prisma.service';
import { BookingController } from './booking.controller';
import { BookingRepository } from './booking.repository';
import { BookingService } from './booking.service';

@Module({
  imports: [HotelModule],
  providers: [BookingService, BookingRepository, PrismaService],
  controllers: [BookingController],
  exports: [BookingService, BookingRepository, PrismaService],
})
export class BookingModule {}
