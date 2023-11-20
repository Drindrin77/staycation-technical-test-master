import { Module } from '@nestjs/common';
import { SaleDateModule } from 'business/sale-date/sale-date.module';
import { OrmService } from 'technical/orm/orm.service';
import { HotelController } from './hotel.controller';
import { HotelRepository } from './hotel.repository';
import { HotelService } from './hotel.service';

@Module({
  imports: [SaleDateModule],
  providers: [OrmService, HotelService, HotelRepository],
  controllers: [HotelController],
  exports: [HotelService, HotelRepository, OrmService],
})
export class HotelModule {}
