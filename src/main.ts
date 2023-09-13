import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix('api') //the endpoint of the domain with be "api"
  await app.listen(3000);
}
bootstrap();
