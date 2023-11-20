import { Injectable } from '@nestjs/common';
import { SaleDateRepository } from './sale-date.repository';

@Injectable()
export class SaleDateService {
  constructor(private saleDateRepository: SaleDateRepository) {}

  getCurrentSaleDate() {
    const currentDate = new Date();
    return this.saleDateRepository.findFirst({
      where: {
        start_date: {
          lte: currentDate,
        },
        end_date: {
          gte: currentDate,
        },
      },
    });
  }
}
