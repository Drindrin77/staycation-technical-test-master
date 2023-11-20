import { Module } from '@nestjs/common';
import { OrmService } from 'technical/orm/orm.service';
import { SaleDateRepository } from './sale-date.repository';
import { SaleDateService } from './sale-date.service';

@Module({
  providers: [OrmService, SaleDateService, SaleDateRepository],
  exports: [SaleDateService, SaleDateRepository, OrmService],
})
export class SaleDateModule {}
