import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as config from 'config';

async function bootstrap() {
  const serverConfig = config.get('server');
  const PORT = process.env.PORT || serverConfig.port;
  const app = await NestFactory.create(AppModule);
  console.log(`Listening on PORT: ${PORT}`);
  await app.listen(PORT);
}
bootstrap();
