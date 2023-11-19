import { NestFactory } from '@nestjs/core';
import { HotelModule } from 'business/hotel/hotel.module';

async function bootstrap() {
  const app = await NestFactory.create(HotelModule);
  await app.listen(3000);
}
bootstrap();
