import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { ValidationPipe } from '@nestjs/common';
import { setupSwagger } from '../libs/utils/swagger';
import { getSecret, loadSecrets } from '@morak/vault';
import '../libs/utils/bigIntToJson';

async function bootstrap() {
  await loadSecrets();
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  app.enableCors({
    origin: getSecret(`DOMAIN`),
    credentials: true,
  });
  setupSwagger(app);

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, transform: true }));
  await app.listen(getSecret('PORT'));
}
bootstrap();
