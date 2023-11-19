import { Injectable } from '@nestjs/common';
import { SaleDateRepository } from './sale-date.repository';

@Injectable()
export class SaleDateService {
  constructor(private saleDateRepository: SaleDateRepository) {}

  getCurrentSaleDate() {
    const currentDate = new Date();
    return this.saleDateRepository.findFirst({
      where: {
        startDate: {
          gte: currentDate,
        },
        endDate: {
          lte: currentDate,
        },
      },
    });
  }
}
