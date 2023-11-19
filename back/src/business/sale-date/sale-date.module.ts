import { Module } from '@nestjs/common';
import { PrismaService } from 'technical/prisma/prisma.service';
import { SaleDateRepository } from './sale-date.repository';
import { SaleDateService } from './sale-date.service';

@Module({
  providers: [PrismaService, SaleDateService, SaleDateRepository],
  exports: [SaleDateService, SaleDateRepository, PrismaService],
})
export class SaleDateModule {}
