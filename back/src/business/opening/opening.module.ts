import { Module } from '@nestjs/common';
import { OrmService } from 'technical/orm/orm.service';
import { OpeningController } from './opening.controller';
import { OpeningRepository } from './opening.repository';
import { OpeningService } from './opening.service';

@Module({
  providers: [OrmService, OpeningRepository, OpeningService],
  controllers: [OpeningController],
  exports: [OpeningRepository, OpeningService, OrmService],
})
export class OpeningModule {}
