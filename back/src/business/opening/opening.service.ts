import { Injectable } from '@nestjs/common';
import { OpeningRepository } from './opening.repository';

@Injectable()
export class OpeningService {
  constructor(private openingRepository: OpeningRepository) {}

  getOpeningDetails(id: number) {
    return this.openingRepository.findFirst({
      where: {
        id,
      },
      include: {
        rooms: {
          include: {
            hotels: {
              include: {
                reviews: true,
              },
            },
          },
        },
        sale_dates: true,
      },
    });
  }
}
