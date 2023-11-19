import { Injectable } from '@nestjs/common';
import { PrismaService } from 'technical/prisma/prisma.service';
import { BookHotelDto } from './booking.dto';

@Injectable()
export class BookingRepository {
  constructor(private prisma: PrismaService) {}

  async bookRoom({ openingId, userId, date }: BookHotelDto) {
    try {
      await this.prisma.$transaction(async (tx) => {
        const opening = await tx.opening.findUnique({
          where: {
            id: openingId,
          },
        });

        if (!opening || opening.stock <= 0) {
          throw new Error('Opening not available for reservation');
        }

        await tx.booking.create({
          data: {
            userId,
            roomId: opening.roomId,
            date,
          },
        });

        await tx.opening.update({
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
