import { Injectable } from '@nestjs/common';
import { PrismaService } from 'technical/prisma/prisma.service';
import { BookHotelDto } from './booking.dto';

@Injectable()
export class BookingRepository {
  constructor(private prisma: PrismaService) {}

  async bookRoom({ openingId, userId, date }: BookHotelDto) {
    try {
      await this.prisma.$transaction(async (tx) => {
        const opening = await tx.openings.findUnique({
          where: {
            id: openingId,
            sale_dates: {
              bookable_days: {
                has: date,
              },
            },
          },
        });

        if (!opening || opening.stock <= 0) {
          throw new Error('Opening not available for reservation');
        }

        await tx.bookings.create({
          data: {
            user_id: userId,
            room_id: opening.room_id,
            date,
          },
        });

        await tx.openings.update({
          where: {
            id: opening.id,
          },
          data: {
            stock: opening.stock - 1,
          },
        });
      });
    } catch (err: unknown) {
      console.log(err);
    }
  }
}
