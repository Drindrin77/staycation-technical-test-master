import { Module } from '@nestjs/common';
import { PrismaService } from 'technical/prisma/prisma.service';
import { OpeningController } from './opening.controller';
import { OpeningRepository } from './opening.repository';
import { OpeningService } from './opening.service';

@Module({
  providers: [PrismaService, OpeningRepository, OpeningService],
  controllers: [OpeningController],
  exports: [OpeningRepository, OpeningService, PrismaService],
})
export class OpeningModule {}
