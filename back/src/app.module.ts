import { Module } from '@nestjs/common';
import { BookingModule } from 'business/booking/booking.module';
import { HotelModule } from 'business/hotel/hotel.module';
import { OpeningModule } from 'business/opening/opening.module';
import { SaleDateModule } from 'business/sale-date/sale-date.module';
import { UserModule } from 'business/user/user.module';

@Module({
  imports: [
    HotelModule,
    UserModule,
    SaleDateModule,
    BookingModule,
    OpeningModule,
  ],
})
export class AppModule {}
