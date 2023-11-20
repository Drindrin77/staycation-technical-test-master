import { Module } from '@nestjs/common';
import { HotelModule } from 'business/hotel/hotel.module';
import { OrmService } from 'technical/orm/orm.service';
import { BookingController } from './booking.controller';
import { BookingRepository } from './booking.repository';
import { BookingService } from './booking.service';

@Module({
  imports: [HotelModule],
  providers: [BookingService, BookingRepository, OrmService],
  controllers: [BookingController],
  exports: [BookingService, BookingRepository, OrmService],
})
export class BookingModule {}
