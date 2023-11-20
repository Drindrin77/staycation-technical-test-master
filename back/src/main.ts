import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from 'app.module';
import { PrismaClientExceptionFilter } from 'exception/prisma-exception-filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });
  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new PrismaClientExceptionFilter(httpAdapter));

  await app.listen(3001);
}
bootstrap();
